import pied_poker as pp
import numpy as np


def calcularProbabilidades(jugadores):
    #IMPORTANTE IMPORTANTE IMPORTANTE IMPORTANTE IMPORTANTE IMPORTANTE IMPORTANTE IMPORTANTE 
    #player=jugadores de la libreria pied_poker
    #jugadores=jugadores del json recibido
    players = []
    for jugador in jugadores:
        players.append(  pp.Player(str(jugador["carta1"]), pp.Card.of(jugador["carta1"], jugador["carta2"]))  )



    #simular/probabilidades
    community_cards = pp.Card.of()

    simulator = pp.PokerRound.PokerRoundSimulator(community_cards=community_cards,
                       players=players,
                      total_players=int(len(players)))

    simulation_result = simulator.simulate(n=10000, n_jobs=1)


    #empaquetar probabilidades
    for player, jugador in zip(players, jugadores):
        #probabilidad
        salida=str(simulation_result.probability_of(pp.Probability.PlayerWins(player)))
        caracter=salida.find("%")
        jugador["probabilidad"] = salida[:caracter]

        #calidad
        prob=float(salida[:caracter])

        if (prob<20.0):
            jugador["calidad"] = 3
        elif (prob>=20.0 and prob<45.0):
            jugador["calidad"] = 2
        elif (prob>=45.0):
            jugador["calidad"] = 1
        else:
            jugador["calidad"] = 3


    return(jugadores)


        

