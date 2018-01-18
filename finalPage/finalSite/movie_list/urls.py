from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<movie_id>[0-9]+)/$', views.movie_list, name='movie'),
    url(r'^hotweek/$', views.hotWeekMovies, name='week_hot_movies'),
    url(r'^hotmonth/$', views.hotMonthMovies, name='month_hot_movies'),
    url(r'^online/$', views.onlineMovies, name='online_movies'),
    url(r'^comingsoon/$', views.soonMovies, name='soon_movies'),
]
