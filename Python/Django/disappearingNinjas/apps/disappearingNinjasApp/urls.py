from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^ninja$', views.ninja),
    url(r'^ninjacolor/(?P<color>.+)$', views.ninjacolor)
]
