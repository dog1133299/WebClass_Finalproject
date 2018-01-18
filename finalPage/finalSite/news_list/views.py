from __future__ import unicode_literals
from django.shortcuts import render, render_to_response
from django.http import Http404
from django.core.paginator import Paginator
from django.core.paginator import EmptyPage
from django.core.paginator import PageNotAnInteger
from .models import News

# Create your views here.
def index(request):
    limit = 7
    news = News.objects.all()
    paginator = Paginator(news, limit)
    page = request.GET.get('page')
    try:
        news = paginator.page(page)
    except PageNotAnInteger:
        news = paginator.page(1)
    except EmptyPage:
        news = paginator.page(paginator.num_pages)
    return render_to_response('news_list/newsindex.html', locals())
def news_list(request, news_id):
    try:
        news = News.objects.get(pk=news_id)
    except Movie.DoesNotExist:
        raise Http404("News does not exist")
    return render(request, 'news_list/news.html', {'news': news})
def foodset(request):
    return render_to_response('news_list/foodset.html', locals())
def cardFriend(request):
    return render_to_response('news_list/card.html', locals())
def groupTicket(request):
    return render_to_response('news_list/ticket.html', locals())
