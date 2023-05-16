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

    def get(self, request):
        limit = 10  # Number of books to retrieve
        openlibrary_url = 'http://openlibrary.org/search/lists.json'
        openlibrary_params = {
            'q': 'book',
            'limit': limit,
            'offset': 0
        }

        openlibrary_response = requests.get(openlibrary_url, params=openlibrary_params)
        openlibrary_response.raise_for_status()
        openlibrary_data = openlibrary_response.json()
        print("books:", openlibrary_data)
        books = openlibrary_data.get('docs', [])
        book_data = []
        for book in books:
            book_title = book.get('name')
            book_cover = None
            if 'seed_count' in book:
                cover_id = book['seed_count']
                book_cover = f"http://covers.openlibrary.org/b/id/{cover_id}-M.jpg"
            book_data.append({'title': book_title, 'cover': book_cover})

        return Response({'books': book_data})





class BookList(APIView):
    renderer_classes = [JSONRenderer]

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
        if openlibrary_data['works']:
            books = []
            count = 0
            for book in openlibrary_data['works']:
                if count == 5:
                    break
                title = book['title']
                books.append({
                    'name': title,
                    'url': f'https://openlibrary.org/search?q={title.replace(" ", "+")}',
                    'cover': f'https://covers.openlibrary.org/b/id/{book["cover_i"]}-M.jpg' if 'cover_i' in book else None,
                })
                count += 1
            return Response({'recommendations': books})
        else:
            return Response({'message': 'No books found with the given criteria'})


        
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
