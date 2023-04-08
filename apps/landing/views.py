from .serializers import LandingSerializer, FeatureSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Landing, Feature


class LandingApiViewSet(ModelViewSet):
    serializer_class = LandingSerializer
    queryset = Landing.objects.all()
    http_method_names = ['get']
    filter_backends = [OrderingFilter, DjangoFilterBackend]
    filterset_fields = ['title', 'product', 'status']
    ordering = ['-created']


class FeatureApiViewSet(ModelViewSet):
    serializer_class = FeatureSerializer
    queryset = Feature.objects.all()
    http_method_names = ['get']
    filter_backends = [OrderingFilter, DjangoFilterBackend]
    filterset_fields = ['title', 'landing']
