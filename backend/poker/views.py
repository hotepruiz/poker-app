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
    player1=[]
    player2=[]

    player1=poker.DetectarCartas()
    print(player1)

    time.sleep(3)

    player2=poker.DetectarCartas()
    print(player2)


    return JsonResponse({
    "calidad": "1",
    "probabilidad": "50",
    "carta1": player1[0],
    "carta2": player1[1]
    })

def testCartas2(request, cantidad):
    jugadores=[]

    for i in range(cantidad):
        jugador_nuevo = {}
        cartas = poker.DetectarCartas()

        jugador_nuevo["carta1"] = cartas[0]
        jugador_nuevo["carta2"] = cartas[1]

        jugadores.append(jugador_nuevo)


    jugadores = probabilidades.calcularProbabilidades(jugadores)


    return JsonResponse({
        "jugadores": jugadores
    })