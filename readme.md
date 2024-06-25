# ESTRUCTURA API CON NODE Y EXPRESS

Los siguientes pasos no seran necesarios si directamente copiamos el reposirtorio. Solo `npm install`

## EXPLICACIÖN DE LA ESTRUCTURA

- _index.js_ creara el servidor y escuchara las peticiones
- _src_ codigo de la aplicación
- _app_ configuraciones del servidor

## PASOS PARA EMPEZAR PROYECTO

- `mkdir {nombre _proyecto}` generamos la carpeta
- ` npm init -y` para generar el fichero package.json
- puede ser necesario crear _.gitignore_

### CAMBIOS EN packaje.json

```
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```

### LIBRERIAS BÄSICAS

- Express
- dotenv
- cors

` npm install express dotenv cors`
