from rest_framework import serializers
from .models import Landing, Feature
from apps.product.serializers import ProductSerializer


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = '__all__'


class LandingSerializer(serializers.ModelSerializer):

    product_data = ProductSerializer(source='product', read_only=True)

    class Meta:
        model = Landing
        fields = [
            "id",
            "title",
            "product",
            "product_data",
            "imagepage_1",
            "imagepage_2",
            "detail",
            "status",
        ]
