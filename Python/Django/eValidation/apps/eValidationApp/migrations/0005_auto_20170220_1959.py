# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-20 19:59
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eValidationApp', '0004_auto_20170220_1943'),
    ]

    operations = [
        migrations.RenameField(
            model_name='email',
            old_name='email',
            new_name='address',
        ),
    ]
