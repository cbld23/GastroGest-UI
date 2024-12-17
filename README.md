Instrucciones para ejecutar la aplicación.

Este proyecto consiste en una aplicación Java Spring Boot que utiliza una base de datos PostgreSQL alojada en un contenedor Docker. La API está documentada con Swagger para facilitar su uso, en este caso será una aplicación Angular que actuará como frontend. A continuación, se describen los pasos necesarios para levantar la aplicación Angular.

Requisitos previos antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

Git para clonar el repositorio. Docker para ejecutar la base de datos PostgreSQL. Java 21+ (se recomienda JDK 21) para ejecutar la aplicación Spring Boot. Maven para compilar y empaquetar la aplicación Spring Boot.

Pasos de ejecución

1.Clonar el repositorio a tu máquina local: Ejecutar en una terminal: git clone https://github.com/cbld23/GastroGest.git cd GastroGest

2.Levantar la base de datos PostgreSQL y la aplicicación Spring Boot usando Docker: ejecutar en una terminal: docker-compose up -d 
Esto descargará el software necesario para desplegar una base de datos PostgreSQL en un contenedor y una aplicación Java Spring Boot en otro.

Una vez los contenedores estén levantados, los endpoints de la API están accesibles en: http://localhost:8080/api

Es posible acceder a la API documentada con Swagger directamente desde el navegador y realizar llamadas en: http://localhost:8080/swagger-ui.html

Detener los servicios Detener los contenedores de Docker: ejecutar el siguiente comando: docker-compose down.

5.Para el front con Angular, una vez tengamos clonado el repositorio, 

git clone https://github.com/cbld23/GastroGest.git cd GastroGest-UI

6.Crearemos la imagen con el siguiente comando, docker build -t angular-docker .

7.Ejecutaremos el contenedor Docker utilizando la imagen creada de la aplicación Angular con el siguiente comando.

docker run -p 4201:4200 angular-docker

¡Listo! A continuación, accederemos a la URL http://localhost:4201/ y verificaremos si la aplicación está funcionando dentro del contenedor Docker.
