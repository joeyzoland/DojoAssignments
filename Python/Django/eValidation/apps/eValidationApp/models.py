from __future__ import unicode_literals
import re
from django.db import models
from django.contrib import messages
#Our new manager!
#No methods in our new manager should ever catch the whole request object with a parameter!!! (just parts, like request.POST)
class UserManager(models.Manager):
  def validator(self, request, email):
    EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    if len(email) == 0:
        return messages.info(request, "Please enter an email address.")
    elif not EMAIL_REGEX.match(email):
        return messages.info(request, "Please enter a valid email address.")
    else:
        return messages.success(request, "Thanks for submitting your email address!")

  # def register(self, **kwargs):
  #     print ("Register a user here")
  #     print ("If successful, maybe return {'theuser':user} where user is a user object?")
  #     print ("If unsuccessful do something like this? return {'errors':['User first name to short', 'Last name too short'] ")
  #     pass

class User(models.Model):
  first_name = models.CharField(max_length=45)
  last_name = models.CharField(max_length=45)
  password = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now = True)
  userManager = UserManager()
