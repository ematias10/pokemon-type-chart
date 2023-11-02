

from django.template import loader
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

def indexfw2(request):	
	template = loader.get_template()
	context = {}
	return HttpResponse(template.render(context, request))
