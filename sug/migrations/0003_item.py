# Generated by Django 4.2.3 on 2023-07-12 09:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sug', '0002_rename_catageory_category_alter_category_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=225)),
                ('description', models.TextField(blank=True, null=True)),
                ('price', models.FloatField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='items_image')),
                ('Category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='sug.category')),
            ],
        ),
    ]
