from __future__ import unicode_literals
from django.shortcuts import render, render_to_response
from django.http import Http404
from django.core.paginator import Paginator
from django.core.paginator import EmptyPage
from django.core.paginator import PageNotAnInteger
from .models import Movie, Category

# Create your views here.
def index(request):
    categories = Category.objects.all()
    return render_to_response('finalapp/index.html', locals())
def movie_list(request, movie_id):
    try:
        movie = Movie.objects.get(pk=movie_id)
    except Movie.DoesNotExist:
        raise Http404("Movie does not exist")
    return render(request, 'movie_list/movie.html', {'movie': movie})
def hotWeekMovies(request):
    categories = Category.objects.get(title='現正熱映中')
    return render_to_response('movie_list/hot_week.html', locals())
def hotMonthMovies(request):
    categories = Category.objects.get(title='現正熱映中')
    return render_to_response('movie_list/hot_month.html', locals())
def onlineMovies(request):
    limit = 12
    movies = Movie.objects.all()
    paginator = Paginator(movies, limit)
    page = request.GET.get('page')
    try:
        movies = paginator.page(page)
    except PageNotAnInteger:
        movies = paginator.page(1)
    except EmptyPage:
        movies = paginator.page(paginator.num_pages)
    return render_to_response('movie_list/online_movies.html', locals())
def soonMovies(request):
    limit = 12
    movies = Movie.objects.all()
    paginator = Paginator(movies, limit)
    page = request.GET.get('page')
    try:
        movies = paginator.page(page)
    except PageNotAnInteger:
        movies = paginator.page(1)
    except EmptyPage:
        movies = paginator.page(paginator.num_pages)
    return render_to_response('movie_list/soon_movies.html', locals())
