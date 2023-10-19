from django.contrib import admin
from .models import SolarOption, OptionImage, Quote

admin.site.register(SolarOption)
admin.site.register(OptionImage)
admin.site.register(Quote)