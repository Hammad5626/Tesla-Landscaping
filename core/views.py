from django.shortcuts import render, redirect
from .models import SolarOption, Quote
import uuid

def index(request):
    return render(request, "core/index.html")

def quote1(request):
    return render(request, "core/quote1.html")

def quote2(request):
    if request.method == 'POST':
        lat = request.POST.get('lat')
        lng = request.POST.get('lng')
        context = {
            'lat': lat,
            'lng': lng
            }
        return render(request, "core/quote2.html", context)
    return render(request, "core/quote2.html")

def quote3(request):
    if request.method == 'POST':
        coordinates = request.POST.get('coordinates')
        solar_options = SolarOption.objects.all()
        context = {
            'coordinates': coordinates,
            'solar_options': solar_options
            }
        return render(request, 'core/quote3.html', context)
    solar_options = SolarOption.objects.all()
    return render(request, 'core/quote3.html', {'solar_options': solar_options})

def quote4(request):
    if request.method == 'POST':
        total_distance = request.POST.get('total_distance')
        selected_value = request.POST.get('selected_value')
        initialLat = request.POST.get('initialLat')
        initialLng = request.POST.get('initialLng')
        selectedTitle = request.POST.get('selectedTitle')

        context = {
            'total_distance': total_distance,
            'selected_value': selected_value,
            'initialLat': initialLat,
            'initialLng': initialLng,
            'selectedTitle': selectedTitle,
        }
        return render(request, "core/quote4.html", context)
    return render(request, "core/quote4.html")

def quote5(request):
    if request.method == 'POST':
        initialLat = request.POST.get('initialLat')
        initialLng = request.POST.get('initialLng')
        selectedMaterial = request.POST.get('selectedMaterial')
        price = request.POST.get('price')
        area = request.POST.get('area')
        
        context = {
            'initialLat': initialLat,
            'initialLng': initialLng,
            'selectedMaterial': selectedMaterial,
            'price': price,
            'area': area,
        }
        
        return render(request, "core/quote5.html", context)
    return render(request, "core/quote5.html")

def quote6(request):
    if request.method == 'POST':
        unique_id = str(uuid.uuid4())
        initialLat = request.POST.get('initialLat')
        initialLng = request.POST.get('initialLng')
        selectedMaterial = request.POST.get('selectedMaterial')
        price = request.POST.get('price')
        area = request.POST.get('area')
        
        if request.user.is_authenticated:
            username = request.user.username
        else:
            username = "Guest" 
        
        quote = Quote(
            unique_id=unique_id,
            username=username,
            initialLat=initialLat,
            initialLng=initialLng,
            selectedMaterial=selectedMaterial,
            price=price,
            area=area,
        )
        quote.save()

        
        context = {'unique_id': unique_id,}
        return render(request, "core/quote6.html", context)
    return render(request, "core/quote6.html")

def about(request):
    return render(request, "core/about.html")

def gallery(request):
    return render(request, "core/gallery.html")