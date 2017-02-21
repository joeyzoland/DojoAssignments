from __future__ import unicode_literals
import re
from django.db import models
from django.contrib import messages

# Create your models here.
class UserManager(models.Manager):

    def fValidator(self, request, first_name):
        if len(first_name) < 2:
            return 1, messages.info(request, "Please enter a first name.")
        return (0, 0)

    def lValidator(self, request, last_name):
        if len(last_name) < 2:
            return 1, messages.info(request, "Please enter a last name.")

        return (0, 0)

    def eValidator(self, request, email):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(email) == 0:
            return 1, messages.info(request, "Please enter an email address.")
        elif not EMAIL_REGEX.match(email):
            return 1, messages.info(request, "Please enter a valid email address.")

        return (0, 0)

    def pValidator(self, request, password, password2):
        if len(password) < 8 and password == password2:
            return 1, messages.info(request, "Please enter a password that is at least 8 characters in length.")
        elif len(password) >= 8 and password != password2:
            return 1, messages.info(request, "Please make sure that your confirmation password matches your original password.")
        elif len(password) < 8 and password != password2:
            return 1, messages.info(request, "Please enter a password that is at least 8 characters in length."), messages.info(request, "Please make sure that your confirmation password matches your original password.")

        return (0, 0)

    def login(self, request, email, password):
        print registration.objects.filter(email = email)
        registration.objects.filter(email = email)

class registration(models.Model):
    first_name = models.CharField(max_length = 45)
    last_name = models.CharField(max_length = 45)
    email = models.EmailField()
    password = models.CharField(max_length = 200)
    objects = UserManager()
