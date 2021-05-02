# Generated by Django 3.1.8 on 2021-05-02 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0091_auto_20210413_0520'),
    ]

    operations = [
        migrations.AddField(
            model_name='verifiableemail',
            name='last_verification_email_ts',
            field=models.DateTimeField(blank=True, default=None, help_text='Timestamp when the last verification e-mail was sent to this address', null=True),
        ),
    ]