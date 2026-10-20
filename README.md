# Plataforma de Eventos e Inscripciones

## Descripción

Proyecto backend desarrollado como parte del curso
PBE II - Diseño y Arquitectura Backend.

La aplicación está orientada a la gestión de eventos
e inscripciones de usuarios.

Esta primera pre-entrega establece una arquitectura
modular, preparada para incorporar autenticación,
roles, eventos, inscripciones y notificaciones.

## Tecnologías

- Node.js
- Express.js
- JavaScript con módulos ESM
- MongoDB / Mongoose (modelos iniciales)
- dotenv
- Git y GitHub

## Instalación

1. Clonar el repositorio:

git clone URL_DEL_REPOSITORIO

2. Ingresar al directorio:

cd plataforma-eventos-backend

3. Instalar dependencias:

npm install

## Variables de entorno

Crear un archivo .env tomando como referencia
.env.example.

Variables necesarias:

- PORT: puerto del servidor.
- NODE_ENV: entorno de ejecución.
- MONGO_URL: conexión futura a MongoDB.
- JWT_SECRET: clave para la futura autenticación.

La conexión a MongoDB y la autenticación
todavía no están implementadas en esta etapa.

## Ejecución

Modo desarrollo:

npm run dev

Modo normal:

npm start

Puerto predeterminado: 8080.

## Estructura

src/
  app.js
  server.js
  config/
  routes/
  controllers/
  services/
  repositories/
  dao/
  models/
  middlewares/
  utils/

## Endpoints disponibles

GET /api/health

Respuesta:
{"status":"ok","message":"Servidor activo"}

GET /api/events

Respuesta:
{"status":"success","payload":[]}

GET /api/sessions

Respuesta:
{"status":"success","message":"Módulo de sesiones preparado"}

## Arquitectura

La aplicación separa responsabilidades:

- app.js: configuración de Express.
- server.js: inicio del servidor.
- routes/: definición de endpoints.
- controllers/: solicitudes y respuestas HTTP.
- services/: lógica de aplicación.
- repositories/: acceso a datos futuro.
- dao/: persistencia futura.
- models/: esquemas de User y Event.
- middlewares/: procesamiento intermedio.
- config/: configuraciones.
- utils/: funciones auxiliares futuras.

## Estado del proyecto

Pre-entrega 1: base arquitectónica inicial.

Pendiente para siguientes entregas:

- Registro y login.
- Autenticación con JWT y cookies.
- Autorización por roles.
- CRUD completo de eventos.
- Inscripciones y control de cupos.
- Notificaciones.
- Persistencia efectiva en MongoDB.