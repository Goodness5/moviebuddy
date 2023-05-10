from django.urls import path
from django.views.generic import TemplateView
from .views import RecommendMovies, MovieList, index

urlpatterns = [
    path('movielist/', MovieList.as_view(), name='movie-list'),
]
