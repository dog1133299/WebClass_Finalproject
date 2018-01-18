from __future__ import unicode_literals
from django.db import models

# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=30)
    context = models.TextField(default="無")
    timestamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    def __str__(self):
        return self.title
    class Meta:
        ordering = ["-timestamp"]
