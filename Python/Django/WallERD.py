from django.db import models
class Users(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Messages(models.Model):
    user = models.ForeignKey(Users)
    message = models.TextField(max_length = 1000)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Comments(models.Model):
    message = models.ForeignKey(Messages)
    user_id = models.ForeignKey(Users)
    comment = models.TextField(max_length = 1000)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
