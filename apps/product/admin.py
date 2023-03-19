from django.contrib import admin
from .models import Category, Product


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'status', 'parent']
    list_filter = ['name', 'status',]
    prepopulated_fields = {'slug': ('name',)}
    list_display_links = ['name', 'parent']
    search_fields = ['name', 'parent']
    list_per_page = 25


class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category','status', 'price', 'stock', 'compare_price','image_tag']
    list_filter = ['status', 'category','stock',]
    readonly_fields = ('image_tag',)
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name', 'description']
    list_per_page = 25
    list_editable = ('compare_price', 'price', 'stock', )


admin.site.register(Category ,CategoryAdmin)
admin.site.register(Product,ProductAdmin)
