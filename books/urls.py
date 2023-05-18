from django.urls import path
from django.views.generic import TemplateView
from .views import HomepageView, BookList

urlpatterns = [
    path('bookshomepageview/', HomepageView.as_view(), name='books'),
    path('booklist/', BookList.as_view(), name='booklist'),
]
