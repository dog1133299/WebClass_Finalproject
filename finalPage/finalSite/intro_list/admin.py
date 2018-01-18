from django.contrib import admin
from .models import Contact
from .forms import ContactForm

# Register your models here.
admin.site.register(Contact)
