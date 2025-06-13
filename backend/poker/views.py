from django.shortcuts import render
from django.http import JsonResponse

def hola(request):
    return JsonResponse({"mensaje": "Hola desde Django"})

def obtenerCartas(request):
    return JsonResponse({
    "calidad": "1",
    "probabilidad": "50",
    "carta1": "6s",
    "carta2": "kh"
    })