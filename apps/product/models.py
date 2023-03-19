from django.db import models
from django.utils.safestring import mark_safe

class Category(models.Model):
    STATUS = (
        ('True', 'True'),
        ('False', 'False'),
    )
    
    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=50)
    keywords = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    status=models.CharField(max_length=10, choices=STATUS)
    slug = models.SlugField(null=False, unique=True)
    create_at=models.DateTimeField(auto_now_add=True)
    update_at=models.DateTimeField(auto_now=True)
        

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categorías'


    def __str__(self):
        return self.name
    

class Product(models.Model):
    STATUS = (
        ('True', 'True'),
        ('False', 'False'),
    )

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, unique=True)
    keywords = models.CharField(max_length=255, blank=True)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to='photos/products')
    description = models.TextField(max_length=500, blank=True)
    price = models.IntegerField(default=0)
    compare_price = models.IntegerField(default=0)
    status = models.CharField(max_length=10,choices=STATUS)
    stock = models.IntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

        
    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Productos'

    
    def __str__(self):
        return self.name
    

    def image_tag(self):
        if self.image.url is not None:
            return mark_safe('<img src="{}" height="50"/>'.format(self.image.url))
        else:
            return ""