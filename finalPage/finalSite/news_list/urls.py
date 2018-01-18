from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<news_id>[0-9]+)/$', views.news_list, name='news'),
    url(r'^foodsets/$', views.foodset, name='foodsets'),
    url(r'^group/$', views.groupTicket, name='ticket'),
    url(r'^card/$', views.cardFriend, name='group'),
]
