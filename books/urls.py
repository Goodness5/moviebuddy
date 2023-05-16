from django.urls import path
from django.views.generic import TemplateView
from .views import HomepageView

urlpatterns = [
    path('bookshomepageview/', HomepageView.as_view(), name='books'),
]
