from django.urls import path
from app0 import views

urlpatterns = [
    path("about/" , views.About , name = "about"),
    path("contact/" , views.Contact , name = "contact"),
    path("moasese/" , views.Moasese , name = "moasese"),
    path("mahd/" , views.Mahd , name = "mahd"),
    path("pish/" , views.Pish , name = "pish"),
]

