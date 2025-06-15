from django.urls import path
from .views import *

urlpatterns = [
    path('hola/', hola),
    path('cartas/', obtenerCartas),
    path('cartas2/<int:cantidad>', testCartas2),
    path('kys/', testCartas),
]