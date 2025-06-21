from django.shortcuts import render
from django.http import JsonResponse
import ia_cartas.detectorCartas as poker
import ia_cartas.probabilidades as probabilidades
import time

def hola(request):
    return JsonResponse({"mensaje": "Hola desde Django"})

def obtenerCartas(request):
    return JsonResponse({
    "calidad": "1",
    "probabilidad": "50",
    "carta1": "6s",
    "carta2": "kh"
    })

def testCartas(request):

    return JsonResponse({"jugadores": [{"carta1": "2c", "carta2": "7s", "probabilidad": "13.2", "calidad": 3, "id":1}, {"carta1": "Kh", "carta2": "Kd", "probabilidad": "87.1", "calidad": 1, "id":2}]})

def testCartas2(request, cantidad):
    jugadores=[]

    for i in range(cantidad):
        jugador_nuevo = {}
        cartas = poker.DetectarCartas(i+1)

        jugador_nuevo["carta1"] = cartas[0]
        jugador_nuevo["carta2"] = cartas[1]
        
        jugador_nuevo["id"] = i+1

        jugadores.append(jugador_nuevo)
        time.sleep(3)

    jugadores = probabilidades.calcularProbabilidades(jugadores)


    return JsonResponse({
        "jugadores": jugadores
    })