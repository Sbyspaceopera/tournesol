# Generated by Django 4.0.6 on 2022-08-02 07:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("tournesol", "0043_make_ratelater_generic"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="ratelater",
            options={"ordering": ["user", "-created_at"]},
        ),
    ]