from django.shortcuts import render

def index(request):
    return render(request, "core/index.html")

def quote1(request):
    return render(request, "core/quote1.html")

def quote2(request):
    return render(request, "core/quote2.html")

def quote3(request):
    return render(request, "core/quote3.html")

def quote4(request):
    return render(request, "core/quote4.html")

def quote5(request):
    return render(request, "core/quote5.html")

def about(request):
    return render(request, "core/about.html")

def gallery(request):
    return render(request, "core/gallery.html")