# Plataforma de Eventos e Inscripciones

## Pre-entrega 1 – Refactor arquitectónico inicial

Proyecto desarrollado para el curso **PBE II – Diseño y Arquitectura Backend (Coderhouse)**.

### 1. Descripción del proyecto

La Plataforma de Eventos e Inscripciones es una API REST desarrollada con Node.js, Express y MongoDB.

El objetivo de esta primera pre-entrega es establecer una arquitectura backend modular, organizada por capas y preparada para incorporar nuevas funcionalidades.

Se implementaron la configuración inicial del servidor, los recursos Events y Sessions, los modelos principales y la conexión real con MongoDB.

Además, se incorporaron las capas DAO y Repository para separar el acceso a los datos de la lógica de aplicación.

### 2. Tecnologías utilizadas

- Node.js
- Express.js
- JavaScript con módulos ESM (import/export)
- MongoDB
- Mongoose
- dotenv
- Git y GitHub

### 3. Arquitectura del proyecto

La aplicación utiliza una arquitectura organizada por capas:

**Ruta → Controlador → Servicio → Repository → DAO → Modelo → MongoDB**

Cada capa tiene una responsabilidad específica:

- **Routes:** definición de endpoints HTTP.
- **Controllers:** recepción de solicitudes y generación de respuestas.
- **Services:** coordinación de la lógica de aplicación.
- **Repositories:** abstracción del acceso a datos.
- **DAO:** operaciones de persistencia utilizando Mongoose.
- **Models:** definición de las entidades y esquemas.
- **Middlewares:** procesamiento intermedio y manejo de errores.
- **Config:** centralización de variables y conexión a MongoDB.
- **Utils:** utilidades y pruebas de persistencia.

Esta separación facilita el mantenimiento, la reutilización y las pruebas del sistema.

### 4. Estructura de carpetas

```text
src/
├── app.js
├── server.js
├── config/
│   ├── env.js
│   └── database.js
├── routes/
│   ├── health.router.js
│   ├── events.router.js
│   └── sessions.router.js
├── controllers/
│   ├── health.controller.js
│   ├── events.controller.js
│   └── sessions.controller.js
├── services/
│   └── events.service.js
├── repositories/
│   └── events.repository.js
├── dao/
│   └── events.dao.js
├── models/
│   ├── User.js
│   ├── Event.js
│   └── Inscription.js
├── middlewares/
│   └── error.middleware.js
└── utils/
    └── verifyPersistence.js
```

### 5. Instalación

Clonar el repositorio:

```bash
git clone https://github.com/sanbresso/backend-2-pre-entrega-1.git
```

Ingresar al proyecto:

```bash
cd backend-2-pre-entrega-1
```

Instalar las dependencias:

```bash
npm install
```

### 6. Variables de entorno

El proyecto utiliza `dotenv` para gestionar variables de entorno.

Crear un archivo `.env` tomando como referencia `.env.example`.

```bash
cp .env.example .env
```

Variables requeridas:

```dotenv
PORT=8080
NODE_ENV=development
MONGO_URL=mongodb://127.0.0.1:27017/plataforma_eventos
JWT_SECRET=reemplazar_por_clave_segura
```

La variable `MONGO_URL` debe configurarse según la instancia MongoDB utilizada, ya sea local o MongoDB Atlas.

La variable `JWT_SECRET` queda preparada para las siguientes etapas del proyecto.

El archivo `.env` está excluido del control de versiones mediante `.gitignore` para evitar publicar información sensible.

### 7. Conexión a MongoDB

La conexión se implementa en:

`src/config/database.js`

Se utiliza `mongoose.connect()` con la URL obtenida desde el módulo de configuración centralizada.

El archivo `src/server.js` establece la conexión a MongoDB antes de iniciar Express.

Si la conexión falla, se informa el error y el servidor no comienza a escuchar solicitudes.

### 8. Ejecución

Modo desarrollo:

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

Con la configuración predeterminada, el servidor estará disponible en:

`http://localhost:8080`

La aplicación requiere una conexión MongoDB válida para iniciarse.

### 9. Endpoints disponibles

**GET /api/health**

Comprueba que el servidor está activo.

Respuesta HTTP 200:

```json
{
  "status": "ok",
  "message": "Servidor activo"
}
```

**GET /api/events**

Consulta los eventos almacenados en MongoDB mediante el flujo:

Router → Controller → Service → Repository → DAO → Event.

Respuesta HTTP 200:

```json
{
  "status": "success",
  "payload": []
}
```

El arreglo `payload` estará vacío únicamente cuando no existan eventos en la base consultada. Si hay registros, contendrá los documentos recuperados.

En esta etapa inicial todavía no se implementan filtros de publicación ni controles de acceso para este endpoint.

**GET /api/sessions**

Endpoint informativo que verifica