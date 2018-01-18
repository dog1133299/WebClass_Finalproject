from __future__ import unicode_literals
from django.shortcuts import render, render_to_response, redirect, get_object_or_404
from django.http import Http404
from .forms import ContactForm

# Create your views here.
def index(request):
    return render_to_response('finalapp/index.html', locals())
def QandA(request):
    return render_to_response('intro_list/QandA.html', locals())
def aboutus(request):
    return render_to_response('intro_list/about.html', locals())
def contact(request):
    return render_to_response('intro_list/contact.html', locals())
def contactSend(request):
    return render_to_response('intro_list/contactOK.html', locals())
def device(request):
    return render_to_response('intro_list/device.html', locals())
