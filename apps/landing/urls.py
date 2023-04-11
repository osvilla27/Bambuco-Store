from rest_framework.routers import DefaultRouter
from .views import LandingApiViewSet, FeatureApiViewSet


router_landing = DefaultRouter()


router_landing.register(prefix='landings',
                      basename='landings',
                      viewset=LandingApiViewSet)

router_landing.register(prefix='features',
                      basename='features',
                      viewset=FeatureApiViewSet)


