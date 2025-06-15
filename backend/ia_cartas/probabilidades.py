import pied_poker as pp
import numpy as np


def calcularProbabilidades(jugadores):
    arr = []
    for jugador in jugadores:
        arr.append( pp.Player('test', pp.Card.of(jugador["carta1"], jugador["carta2"])) )
