# -*- coding: utf-8 -*-
# Generated by Django 1.11rc1 on 2017-05-21 06:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie_list', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='date',
            field=models.TextField(default='00:00'),
        ),
    ]
