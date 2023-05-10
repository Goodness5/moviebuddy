from django.urls import path
from django.views.generic import TemplateView
from .views import RecommendMovies, MovieList, index

urlpatterns = [
    # # Route requests for the Next.js files to a Django view
    # path('static/<path:path>', TemplateView.as_view(template_name='nextjs.html')),
    # path('api/recommend_movies/', RecommendMovies.as_view(), name='recommend_movies'),
    # # Route requests for the movie list API to a Django view
    # path('api/movies/', MovieList.as_view(), name='movies'),
]
