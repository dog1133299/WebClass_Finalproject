# -*- coding: utf-8 -*-
# Generated by Django 1.11rc1 on 2017-05-19 13:06
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('finalapp', '0005_auto_20170519_1949'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='category',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.DeleteModel(
            name='Movie',
        ),
    ]
