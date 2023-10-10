import os
from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver

def image_upload_path(instance, filename):
    return os.path.join('solar_option_images', instance.option.title, filename)

class SolarOption(models.Model):
    title = models.CharField(max_length=255)
    value = models.FloatField()
    description = models.TextField(max_length=255)

    def __str__(self):
        return self.title

class OptionImage(models.Model):
    option = models.ForeignKey(SolarOption, on_delete=models.CASCADE)
    image_file = models.ImageField(upload_to=image_upload_path)

    def __str__(self):
        return f"{self.option.title} - Image"

    def save(self, *args, **kwargs):
        extension = os.path.splitext(self.image_file.name)[-1].lower()
        new_filename = f"{self.option.title.replace(' ', '_')}{extension}"
        self.image_file.name = os.path.join('solar_option_images', self.option.title, new_filename)
        super().save(*args, **kwargs)
        
@receiver(pre_save, sender=OptionImage)
def delete_old_image(sender, instance, **kwargs):
    if instance.pk:
        old_instance = OptionImage.objects.get(pk=instance.pk)
        if old_instance.image_file != instance.image_file:
            if os.path.isfile(old_instance.image_file.path):
                os.remove(old_instance.image_file.path)

pre_save.connect(delete_old_image, sender=OptionImage)
