# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-20 19:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eValidationApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='password',
        ),
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.EmailField(default=0, max_length=100),
            preserve_default=False,
        ),
    ]
