# Uso y funcionalidades de la API.
La API cuenta con 3 funciones REST las cuáles son:
1) Agregar corredor.
2) Ver todos los corredores.
3) Ver corredor por ID

Cuando se abre el archivo index.html se puede acceder la funcionalidad de agregar corredor.
Esta también puede ser probada con Postman haciendo uso del método POST con la ruta: "http://localhost:3000/register". El cuerpo de la petición debe verse de la siguiente manera:
{
  "name" : "Andres",
  "competitorNumber" : 23,
  track : "Pista nevada seccion 3",
  experience : 4,
  institution : "IPN"
}
Nota: La ID de los corredores se va incrementado con cada registro, es decir el primer corredor tendra la ID 1, el segundo tendrá la ID 2, etc.
Los corredores se guardan en un arreglo en el BACKEND.

Las otras dos funcionalidades solo pueden ser probadas por Postman.
1) Para ver a todos los corredores usando el método GET y la siguienre ruta: "http://localhost:3000/showRunners"
2) Para ver a un corredor en específico, use el método GET y la siguiente ruta: "http://localhost:3000/showRunner/{id}", especificando la ID del corredor.
## IMPORTANTE.
Para poder acceder a estas funcionalidades, el archivo Docker-compose debió ser ejecutado previamente.
