from ultralytics import YOLO
import cv2
import matplotlib.pyplot as plt
import ia_cartas.FuncionesExtra as FuncionesExtra

# modelo
model = YOLO("ia_cartas/best.pt")

# cámara


# conteo de cartas
cartas_detectadas = {}

def ContarCartas(resultados):
    global cartas_detectadas  # necesario para modificar la variable global
    clases = FuncionesExtra.EncontrarClases(resultados)  # Clases detectadas en el frame

    for clase in clases:
        if clase in cartas_detectadas:
            cartas_detectadas[clase] += 1
        else:
            cartas_detectadas[clase] = 1


def DetectarCartas(jugador):
    cap = cv2.VideoCapture(1)

    while True:
        cartas_confirmadas = 0
        ret, fotograma = cap.read()
        if not ret:
            break

        #---------------------------------------------------------------------------
        resultados = model.predict(fotograma)
        ContarCartas(resultados)

        imgProcesada = FuncionesExtra.DibujarCajas(fotograma, resultados)

        cv2.imshow("Jugador "+str(jugador), imgProcesada)
        #---------------------------------------------------------------------------


        for veces_detectada in cartas_detectadas.values():
            if veces_detectada > 10:
                cartas_confirmadas += 1


        if cartas_confirmadas == 2:
            cartas_confirmadas = 0
            cap.release()
            break

        if cv2.waitKey(1) & 0xFF == ord('q'):  # q para salir
            cap.release()
            break

    cv2.destroyAllWindows()

    # Obtener las 2 cartas más detectadas
    cartas_top2 = sorted(cartas_detectadas.items(), key=lambda x: x[1], reverse=True)[:2]
    # retornar
    cartas=[]
    for clase, cantidad in cartas_top2:
        nom = FuncionesExtra.ClasesANombreIngles(clase)
        cartas.append(nom)


    cartas_detectadas.clear()
    return(cartas)
