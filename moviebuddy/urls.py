"""moviebuddy URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.urls import include
from movies import views
from movies.views import Homepageview, MovieList
from django.conf import settings
from books.views import BookList, BookDetails, BookListByGenre
from django.conf.urls.static import static
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('movies/', include('movies.urls')),
    path('books/', include('books.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('movies/movielist/', MovieList.as_view(), name='movie-list'),
    path('movies/homepageview', Homepageview.as_view(), name='homepageview'),
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
    # path('booklist/', BookList.as_view, name='movie-list'),
    path('movielist/<str:genre>', views.movielistbygenre, name='movie-list-genre'),
    # path('booklist/<str:genre>', BookListByGenre.as_view, name='book-list-genre'),
    # path('booklist/<path:book_name>/', BookDetails.as_view, name='book-list-details'),
    path('movielist/<path:movie_name>/', views.moviedetails, name='movie-list-details')
] 
