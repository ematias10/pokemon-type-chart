

from django.template import loader
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

def index(request):	
    return render(request, 'index.html')
