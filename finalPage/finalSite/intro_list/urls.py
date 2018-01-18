from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^qanda/$', views.QandA, name='qanda'),
    url(r'^about/$', views.aboutus, name='about'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^contact/send/$', views.contactSend, name='send'),
    url(r'^device/$', views.device, name='device'),
]
