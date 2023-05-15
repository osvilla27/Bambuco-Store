from django.db import models
from django.utils.safestring import mark_safe
from ckeditor_uploader.fields import RichTextUploadingField
from apps.product.models import Product
import os


def get_landing_image_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (instance.id, ext)
    return os.path.join('photos/landing', filename)


class Landing(models.Model):
    STATUS = (
        ('True', 'Activo'),
        ('False', 'Desactivar'),
    )
    title = models.CharField(max_length=25, null=False, verbose_name="título")
    product = models.OneToOneField(
        Product,
        on_delete=models.CASCADE,
        verbose_name='producto')
    imagepage_1 = models.ImageField(upload_to=get_landing_image_path, null=False,)
    imagepage_2 = models.ImageField(upload_to=get_landing_image_path, null=False,)
    detail = RichTextUploadingField(verbose_name='detalles')
    status = models.CharField(
        max_length=10, choices=STATUS, verbose_name='estado')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def image_tag(self):
        if self.imagepage_1.url is not None:
            return mark_safe('<img src="{}" height="50"/>'.format(self.imagepage_1.url))
        else:
            return ""


class Feature(models.Model):
    STATUS = (
        ('True', 'Activo'),
        ('False', 'Desactivar'),
    )
    landing = models.ForeignKey(Landing, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, verbose_name="título")
    description = models.TextField(
        max_length=500, blank=True, verbose_name="descripción")
    image_f = models.ImageField(
        upload_to=get_landing_image_path, null=True, verbose_name='imagen')
    
    def image_tag(self):
        if self.image_f.url is not None:
            return mark_safe('<img src="{}" height="50"/>'.format(self.image_f.url))
        else:
            return ""

    def __str__(self):
        return self.title
