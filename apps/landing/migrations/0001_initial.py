# Generated by Django 4.1.7 on 2023-04-08 03:06

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Landing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=25, verbose_name='título')),
                ('imagepage_1', models.ImageField(upload_to='photos/landing')),
                ('imagepage_2', models.ImageField(upload_to='photos/landing')),
                ('detail', ckeditor_uploader.fields.RichTextUploadingField(verbose_name='detalles')),
                ('status', models.CharField(choices=[('True', 'Activo'), ('False', 'Desactivar')], max_length=10, verbose_name='estado')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='product.product', verbose_name='producto')),
            ],
        ),
        migrations.CreateModel(
            name='Feature',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='título')),
                ('description', models.TextField(blank=True, max_length=500, verbose_name='descripción')),
                ('image_f', models.ImageField(null=True, upload_to='photos/landing', verbose_name='imagen')),
                ('landing', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='landing.landing')),
            ],
        ),
    ]
