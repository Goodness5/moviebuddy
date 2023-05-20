from django.shortcuts import render
import requests
import os
import json
import random
import datetime
from dotenv import load_dotenv, find_dotenv
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.renderers import JSONRenderer
import json

load_dotenv()

OPENLIBRARY_APIKEY = os.getenv("openlibrary_api_key")


def get_openlibrary_data(openlibrary_url, openlibrary_params, fields):
    load_dotenv(find_dotenv())
    openlibrary_params['api_key'] = OPENLIBRARY_APIKEY
    response = requests.get(openlibrary_url, params=openlibrary_params)
    data = response.json()
    results = data['results']
    return [{field: result[field] for field in fields} for result in results]


class HomepageView(APIView):
    renderer_classes = [JSONRenderer]

    def get_trending_books(self, limit=10):
        google_books_url = 'https://www.googleapis.com/books/v1/volumes'
        google_books_params = {
            'q': 'book',
            'maxResults': limit,
            'orderBy': 'newest'
        }

        google_books_response = requests.get(google_books_url, params=google_books_params)
        google_books_response.raise_for_status()
        google_books_data = google_books_response.json().get('items', [])

        book_data = []
        for item in google_books_data:
            volume_info = item.get('volumeInfo', {})
            book_title = volume_info.get('title')
            book_cover = None
            image_links = volume_info.get('imageLinks')
            if image_links:
                book_cover = image_links.get('thumbnail')
            book_data.append({'title': book_title, 'cover': book_cover})

        return book_data

    def get(self, request):
        book_data = self.get_trending_books(limit=30)
        return Response({'books': book_data})





class BookList(APIView):
    def get(self, request):
        limit = 50  # Number of books to retrieve
        search_query = 'books'
        open_library_url = 'https://openlibrary.org/search.json'
        open_library_params = {'limit': limit, 'q': search_query}
        # print(open_library_params)
        try:
            open_library_response = requests.get(open_library_url, params=open_library_params)
            open_library_response.raise_for_status()
            open_library_data = open_library_response.json()
            # print("data is",open_library_data)
            books = []
            if 'docs' in open_library_data:
                for doc in open_library_data['docs']:
                    book = {
                        'title': doc.get('title'),
                        'authors': doc.get('author_name'),
                        'description': doc.get('description'),
                        'publishedDate': doc.get('publish_date'),
                        'imageLinks': doc.get('cover_i'),
                    }
                    books.append(book)
            return Response(books)
        except requests.exceptions.RequestException as e:
            return Response({'message': f'Error occurred: {str(e)}'})

class BookListByGenre(APIView):
    def get(self, request):
        genre = request.GET.get('genre')
        openlibrary_url = 'https://openlibrary.org/subjects.json'
        openlibrary_params = {'limit': 5}
        if genre:
            openlibrary_params['subject'] = genre
        fields = ['title', 'cover_i']

        openlibrary_response = requests.get(openlibrary_url, params=openlibrary_params)
        openlibrary_response.raise_for_status()
        openlibrary_data = openlibrary_response.json()

        if 'works' in openlibrary_data:
            books = []
            for work in openlibrary_data['works']:
                title = work['title']
                cover_i = work['cover_i'] if 'cover_i' in work else None
                books.append({
                    'title': title,
                    'cover_i': cover_i
                })

            return Response({'books': books})
        else:
            return Response({'message': 'No books found with the given genre.'})
        
class BookDetails(APIView):
    def get(self, request):
        title = request.GET.get('title')
        openlibrary_url = 'https://openlibrary.org/search.json'
        openlibrary_params = {'title': title}
        response = requests.get(openlibrary_url, params=openlibrary_params)
        data = response.json()
        if data['numFound'] == 0:
            return Response({'message': 'Book not found.'})
        docs = data['docs']
        book_data = []
        for doc in docs:
            book_data.append({
                'title': doc['title'],
                'author': doc['author_name'][0] if 'author_name' in doc else 'Unknown',
                'first_publish_year': doc['first_publish_year'] if 'first_publish_year' in doc else 'Unknown',
                'genres': doc['subject'] if 'subject' in doc else [],
                'publisher': doc['publisher'][0] if 'publisher' in doc else 'Unknown',
                'cover': 'https://covers.openlibrary.org/b/id/' + str(doc['cover_i']) + '-L.jpg' if 'cover_i' in doc else None,
            })
        return Response({'book_data': book_data})
