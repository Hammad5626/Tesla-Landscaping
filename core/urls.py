from django.urls import path
from .views import (index, about, gallery, quote1, quote2, quote3, quote4, quote5, quote6)

urlpatterns = [
    path("", index, name="index"),
    path("about/", about, name="about"),
    path("quote1/", quote1, name="quote1"),
    path("quote2/", quote2, name="quote2"),
    path("quote3/", quote3, name="quote3"),
    path("quote4/", quote4, name="quote4"),
    path("quote5/", quote5, name="quote5"),
    path("quote6/", quote6, name="quote6"),
    path("gallery/", gallery, name="gallery"),
]