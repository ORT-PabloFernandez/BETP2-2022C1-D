require('dotenv').config();
const mongoclient = require('mongodb').MongoClient;

//TODO: reemplazar con variables de entorno
const uri = process.env.MONGO_URI;

const client = new mongoclient(uri);

//TODO: reemplazar con un singlenton para generar siempre una sola connection
let instance = null;
async function getConnection(){
    if(instance == null){
        try {
            instance = await client.connect();    
        } catch (error) {
            console.log(error.message);
            throw new Error('Error al establecer la conexión con mongodb');
        }
    }
    
    return instance;
}

module.exports = {getConnection};
