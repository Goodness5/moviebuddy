from django.urls import path
from django.views.generic import TemplateView
from .views import RecommendMovies, MovieList, MovieListByGenre, Homepageview, index

urlpatterns = [
    path('movielist/', MovieList.as_view(), name='movie-list'),
    path('homepageview/', Homepageview.as_view(), name='movie-list'),
    path('movielist/<str:genre>', MovieListByGenre.as_view(), name='movie-list-genre'),
]
