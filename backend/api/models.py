from django.db import models
from django.contrib.auth.models import User

class Genre(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Anime(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    release_date = models.DateField()
    episodes = models.IntegerField()
    cover_image = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    genre = models.ManyToManyField(Genre, related_name='animes')
    author = models.ForeignKey(User, on_delete=models.CASCADE,related_name="animes")


    def __str__(self):
        return self.title
