from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=20)
    def __str__(self):
        return self.title
    
class Movie(models.Model):
    ctitle = models.CharField(max_length=20)
    title = models.CharField(max_length=100)
    image = models.ImageField(null=False, blank=False)
    director = models.CharField(max_length=100, default="無")
    actors = models.TextField(default="無")
    length = models.CharField(max_length=20, default="2小時")
    movietype = models.CharField(max_length=100, default="動畫")
    videourl = models.URLField(max_length=200, default="www.youtube.com")
    introduction = models.TextField(default="電影介紹")
    pub_date = models.DateField('上映日期')
    date = models.TextField(default="00:00")
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    def __str__(self):
        return self.ctitle
    class Meta:
        ordering = ["-timestamp"]
