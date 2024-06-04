from django.urls import path
from . import views

urlpatterns = [
    path("animes/",views.AnimeListCreate.as_view(),name='anime-list'),
    path("animes/delete/<int:pk>/", views.AnimeDelete.as_view(), name="delete_anime"),
]
