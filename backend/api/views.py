from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import  UserSerializer, AnimeSerializer,GenreSerializer
from  rest_framework.permissions import IsAuthenticated,AllowAny
from .models import Anime,Genre

# Create your views here.

class AnimeListCreate(generics.ListCreateAPIView):
    serializer_class = AnimeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Anime.objects.filter(author=user)
    
    def perform_create(self,serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

            
class AnimeDelete(generics.DestroyAPIView):
    serializer_class = AnimeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Anime.objects.filter(author=user)    




class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class AnimeList(generics.ListAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    permission_classes = [AllowAny]

class GenreList(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    permission_classes = [AllowAny]

class AnimeDetail(generics.RetrieveAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    permission_classes = [AllowAny]

class AnimeSearch(generics.ListAPIView):
    serializer_class = AnimeSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        query = self.request.query_params.get('q')
        if query:
            return Anime.objects.filter(title__icontains=query)
        return Anime.objects.all()


