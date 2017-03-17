from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^validator$', views.validator),
    url(r'^success$', views.success),
]