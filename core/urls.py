from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from apps.product.urls import router_product
from apps.landing.urls import router_landing

urlpatterns = [   
    path('api/', include(router_product.urls)),
    path('api/', include(router_landing.urls)),
    path('api/', include('apps.product.urls')),
    path('api/', include('apps.user.urls')),
    path('admin/', admin.site.urls),

    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]
