import cv2
import matplotlib.pyplot as plt
    
def DibujarCajas(imagen, resultados):
    
    for resultado in resultados:
        for box in resultado.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])  # coordenadas caja
            label = int(box.cls[0].item())  # Clase predicha
        
            # Dibujar bounding box
            cv2.rectangle(imagen, (x1, y1), (x2, y2), (0, 255, 0), 2)
        
            # Etiqueta con clase y confianza
            nombreCarta = ClasesANombre(label)
            confianza = box.conf[0]

            texto_confianza = f"%: {confianza:.2f}"

            cv2.putText(imagen, nombreCarta, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX,0.5, (0, 255, 0), 2)
            cv2.putText(imagen, texto_confianza, (x1, y1 - 30), cv2.FONT_HERSHEY_SIMPLEX,0.4, (0, 255, 0), 1)

    return imagen

    
#Clases y etiquetas-------------------------------------------------------------------------------------------------------------------
def ClasesANombre(NumeroClase: int):
    NombreClases = [
    '10 de treboles', '10 de diamantes', '10 de corazones', '10 de espadas',
    '2 de treboles', '2 de diamantes', '2 de corazones', '2 de espadas',
    '3 de treboles', '3 de diamantes', '3 de corazones', '3 de espadas',
    '4 de treboles', '4 de diamantes', '4 de corazones', '4 de espadas',
    '5 de treboles', '5 de diamantes', '5 de corazones', '5 de espadas',
    '6 de treboles', '6 de diamantes', '6 de corazones', '6 de espadas',
    '7 de treboles', '7 de diamantes', '7 de corazones', '7 de espadas',
    '8 de treboles', '8 de diamantes', '8 de corazones', '8 de espadas',
    '9 de treboles', '9 de diamantes', '9 de corazones', '9 de espadas',
    'A de treboles', 'A de diamantes', 'A de corazones', 'A de espadas',
    'J de treboles', 'J de diamantes', 'J de corazones', 'J de espadas',
    'K de treboles', 'K de diamantes', 'K de corazones', 'K de espadas',
    'Q de treboles', 'Q de diamantes', 'Q de corazones', 'Q de espadas'
    ]
    
    return NombreClases[NumeroClase]


def ClasesANombreIngles(NumeroClase: int):
    NombreClases = [
        '10c', '10d', '10h', '10s',
        '2c', '2d', '2h', '2s',
        '3c', '3d', '3h', '3s',
        '4c', '4d', '4h', '4s',
        '5c', '5d', '5h', '5s',
        '6c', '6d', '6h', '6s',
        '7c', '7d', '7h', '7s',
        '8c', '8d', '8h', '8s',
        '9c', '9d', '9h', '9s',
        'ac', 'ad', 'ah', 'as',
        'jc', 'jd', 'jh', 'js',
        'kc', 'kd', 'kh', 'ks',
        'qc', 'qd', 'qh', 'qs'
    ]
    
    return NombreClases[NumeroClase]

#Procesamiento imagen---------------------------------------------------------------------------------------------------------------------
def MostrarImagen(imagen):
    if imagen is None:
        print("Error: No se pudo cargar la imagen.")
    else:
        imagen_rgb = cv2.cvtColor(imagen, cv2.COLOR_BGR2RGB)  # Convertir a RGB
        plt.imshow(imagen_rgb)
        plt.axis("off")  
        plt.show()

#Test--------------------------------------------------------------------------------------

def DibujarCajas2(imagen, resultados):

    cajasCorrectas = []
    labelsVistas = []
    #Elegir las cajas que queremos dibujar
    for resultado in resultados:
        for caja in resultado.boxes:
            
            if (caja.cls[0].item() in labelsVistas):#ya vimos el label?
                pass 
            else:
                labelsVistas.append(caja.cls[0].item())
                cajasCorrectas.append(caja)
                

    for resultado in resultados:
        for box in resultado.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])  # coordenadas caja
            label = int(box.cls[0].item())  # Clase predicha
        
            # Dibujar bounding box
            cv2.rectangle(imagen, (x1, y1), (x2, y2), (0, 255, 0), 2)
        
            # Etiqueta con clase y confianza
            nombreCarta = ClasesANombre(label)
            confianza = box.conf[0]

            texto_confianza = f"%: {confianza:.2f}"

            cv2.putText(imagen, nombreCarta, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX,0.5, (0, 255, 0), 2)
            cv2.putText(imagen, texto_confianza, (x1, y1 - 30), cv2.FONT_HERSHEY_SIMPLEX,0.4, (0, 255, 0), 1)

    return imagen


def EncontrarClases(resultados):
    clases = []

    for resultado in resultados:
        for box in resultado.boxes:
            clase = int(box.cls[0].item())
            clases.append(clase)

    return clases