from django.shortcuts import render
import requests
import os
from dotenv import load_dotenv, find_dotenv
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.renderers import JSONRenderer


def get_imdb_data(imdb_url, imdb_params, fields):
    load_dotenv(find_dotenv())
    # imdb_api_key = os.environ['IMDB_API_KEY']
    imdb_params['apiKey'] = "k_5tp79h7z"
    response = requests.get(imdb_url, params=imdb_params)
    data = response.json()
    if data['errorMessage']:
        return []
    results = data['results']
    return [{field: result[field] for field in fields} for result in results]

import requests
from rest_framework.views import APIView
from rest_framework.response import Response

class MovieDetails(APIView):
    def get(self, request):
        title = request.GET.get('title')
        imdb_url = 'https://imdb-api.com/API/AdvancedSearch/'
        imdb_params = {'expression': 'movie', 'title': title, 'plot': 'full'}
        response = requests.get(imdb_url, params=imdb_params)
        data = response.json()
        if data['errorMessage']:
            return Response({'message': 'Movie not found.'})
        results = data['results']
        movie_data = []
        for result in results:
            movie_data.append({
                'title': result['title'],
                'plot': result['plot'],
                'year': result['year'],
                'genres': result['genres'],
                'runtime': result['runtimeStr'],
                'rating': result['imDbRating'],
                'cast': result['stars'],
                'poster': result['image']
            })
        return Response({'movie_data': movie_data})

class MovieList(APIView):
    renderer_classes = [JSONRenderer]

    def get(self, request):
        genre = request.GET.get('genre')
        imdb_url = 'https://imdb-api.com/API/SearchAll/'
        imdb_params = {'expression': 'movie', 'imdb': True}
        if genre:
            imdb_params['genre'] = genre
        fields = ['title', 'image']
        imdb_data = get_imdb_data(imdb_url, imdb_params, fields)
        if imdb_data:
            movies = []
            for movie in imdb_data:
                title = movie['title']
                movie_data = get_movie_data(title)
                if movie_data:
                    movies.append({
                        'name': movie_data[0]['title'],
                        'url': f'https://www.netflix.com/search?q={title.replace(" ", "+")}',
                        'image': movie_data[0]['poster'],
                        'plot': movie_data[0]['plot'],
                        'rating': movie_data[0]['rating']
                    })
                else:
                    movies.append({
                        'name': title,
                        'url': f'https://www.netflix.com/search?q={title.replace(" ", "+")}',
                        'image': movie['image']
                    })
            return Response({'recommendations': movies})
        else:
            return Response({'message': 'No movies found with the given criteria'})





def index(request):
    return render(request, "index.html")

def movielist(request):
    return render(request, 'index.html')

class RecommendMovies(APIView):
    def get(self, request):
        user_rating = request.GET.get('user_rating')
        genre = request.GET.get('genre')
        year = request.GET.get('year')
        imdb_url = 'https://imdb-api.com/API/AdvancedSearch/'
        imdb_params = {'expression': 'movie'}
        if user_rating:
            imdb_params['userRating'] = user_rating
        if genre:
            imdb_params['genre'] = genre
        if year:
            imdb_params['productionYear'] = year
        fields = ['title', 'image']
        imdb_data = get_imdb_data(imdb_url, imdb_params, fields)
        if imdb_data:
            movie = imdb_data[0]
            imdb_title = movie['title']
            imdb_image = movie['image']
            # imdb_plot = movie['plot']
            # imdb_rating = movie['imDb']
            netflix_url = f'https://www.netflix.com/search?q={imdb_title.replace(" ", "+")}'
            return Response({
                'name': imdb_title,
                'url': netflix_url,
                'image': imdb_image,
                # 'plot': imdb_plot,
                # 'rating': imdb_rating
            })
        else:
            return Response({'message': 'No movies found with the given criteria'})


def movies_by_genre(request, genre):
    movies = Movie.objects.filter(genre=genre)
    data = {
        'movies': [
            {
                'title': movie.title,
                'description': movie.description,
                'genre': movie.genre,
                'release_date': movie.release_date.strftime('%Y-%m-%d'),
                'poster': movie.poster.url,
            }
            for movie in movies
        ]
    }
    return JsonResponse(data)
