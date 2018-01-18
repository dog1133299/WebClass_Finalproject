from __future__ import unicode_literals
from django.shortcuts import render, render_to_response
from django.http import Http404
from movie_list.models import Movie, Category
from news_list.models import News

# Create your views here.
def index(request):
    categories = Category.objects.all()
    news = News.objects.all()
    return render_to_response('finalapp/index.html', locals())
