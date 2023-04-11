from django.contrib import admin
from .models import Landing, Feature


class LandingInline(admin.TabularInline):
    model = Feature
    readonly_fields = ('image_tag',)
    extra = 1
    show_change_link = True


class LandingAdmin(admin.ModelAdmin):
    list_display = ['title', 'status', 'image_tag']
    list_filter = ['status', 'product',]
    readonly_fields = ('image_tag',)
    search_fields = ['title']
    list_per_page = 25
    list_editable = ('status', )
    inlines = [LandingInline]


class FeatureAdmin(admin.ModelAdmin):
    list_display = ['title', 'landing']
    list_filter = ['title']
    list_per_page = 25


admin.site.register(Landing, LandingAdmin)
admin.site.register(Feature, FeatureAdmin)
