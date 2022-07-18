from django.shortcuts import render

def Index(request):
    return render(request , "app0/index-3.html")


def About(request):
    return render(request , "app0/about.html")


def Contact(request):
    return render(request , "app0/contact.html")


def Moasese(request):
    return render(request , "app0/moasese.html")


def Mahd(request):
    return render(request , "app0/mahd.html")

def Pish(request):
    return render(request , "app0/pish.html")

