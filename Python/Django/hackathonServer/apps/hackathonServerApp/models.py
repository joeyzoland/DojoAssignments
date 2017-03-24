from __future__ import unicode_literals

from django.db import models

# Create your models here.

class UserManager(models.Manager):

class User(models.Model)
    name = models.CharField(max_length = 45)
    objects = UserManager()

class Post(models.Model)
    description = models.ChardField(max_length = 255)
    posted_by = models.ForeignKey(User, related_name = posts)
    objects = UserManager()

class Comment(models.Model)
    description = models.CharField(max_length = 255)
    commenter = models.ForeignKey(User, related_name = commented)
    commented_from = models.ForeignKey(Post, related_name = comments)
    objects = UserManager()
