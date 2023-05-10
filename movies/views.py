from django.shortcuts import render
import requests
import os
from dotenv import load_dotenv, find_dotenv
from rest_framework.views import APIView
from rest_framework.response import Response
from django_nextjs.render import render_nextjs_page_sync


def get_imdb_data(imdb_url, imdb_params, fields):
    load_dotenv(find_dotenv())
    imdb_api_key = os.environ['IMDB_API_KEY']
    imdb_params['apiKey'] = imdb_api_key
    response = requests.get(imdb_url, params=imdb_params)
    data = response.json()
    if data['errorMessage']:
        return []
    results = data['results']
    return [{field: result[field] for field in fields} for result in results]


def index(request):
    return render_nextjs_page_sync(request)

class RecommendMovies(APIView):
    def get(self, request):
        user_rating = request.GET.get('user_rating')
        genre = request.GET.get('genre')
        year = request.GET.get('year')
        imdb_url = 'https://imdb-api.com/API/SearchMovie/'
        imdb_params = {'expression': 'movie'}
        if user_rating:
            imdb_params['userRating'] = user_rating
        if genre:
            imdb_params['genre'] = genre
        if year:
            imdb_params['productionYear'] = year
        fields = ['title', 'image', 'plot', 'imDb']
        imdb_data = get_imdb_data(imdb_url, imdb_params, fields)
        if imdb_data:
            movie = imdb_data[0]
            imdb_title = movie['title']
            imdb_image = movie['image']
            imdb_plot = movie['plot']
            imdb_rating = movie['imDb']
            netflix_url = f'https://www.netflix.com/search?q={imdb_title.replace(" ", "+")}'
            return Response({
                'name': imdb_title,
                'url': netflix_url,
                'image': imdb_image,
                'plot': imdb_plot,
                'rating': imdb_rating
            })
        else:
            return Response({'message': 'No movies found with the given criteria'})

class MovieList(APIView):
    def get(self, request):
        genre = request.GET.get('genre')
        imdb_url = 'https://imdb-api.com/API/SearchMovie/'
        imdb_params = {'expression': 'movie'}
        if genre:
            imdb_params['genre'] = genre
        fields = ['title', 'image', 'plot', 'imDb']
        imdb_data = get_imdb_data(imdb_url, imdb_params, fields)
        if imdb_data:
            movies = [{
                'name': movie['title'],
                'url': f'https://www.netflix.com/search?q={movie["title"].replace(" ", "+")}',
                'image': movie['image'],
                'plot': movie['plot'],
                'rating': movie['imDb']
            } for movie in imdb_data]
            return Response({'movies': movies})
        else:
            return Response({'message': 'No movies found with the given criteria'})
