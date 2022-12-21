import 'dotenv/config'
// importo la instancia de la app del servidor
import app from './src/app'
// importo la conexion a la base de datos
import { connection } from './src/config/db';

// almaceno la variable de entorno del puerto 
// y le digo que es un string para que luego
// typescript no me tire error
const PORT = process.env.PORT as string;

// por medio de la conexion en caso de que se resuelva 
// la conexion a la base de datos, muestro en consola
// que tanto el servidor como la base de datos, estan conectadas
connection.then(() => {
    // console.log('connection to database established')
    app.listen(PORT, () => {
        console.log(`Servidor listo en el puerto ${PORT}`)
    })
})