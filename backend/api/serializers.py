from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Anime, Genre

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'name']
        extra_kwargs = {"author": {"read_only": True}}

class AnimeSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=True, read_only=True)

    class Meta:
        model = Anime
        fields = ['id', 'title', 'description', 'release_date', 'episodes', 'cover_image', 'genre']
        extra_kwargs = {"author": {"read_only": True}}