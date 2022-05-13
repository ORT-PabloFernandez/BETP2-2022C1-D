const mongoclient = require('mongodb').MongoClient;

//TODO: reemplazar con variables de entorno
const uri = "mongodb+srv://admin:tp2@cluster0.ca7f0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new mongoclient(uri);

//TODO: reemplazar con un singlenton para generar siempre una sola connection
async function getConnection(){
    const instance = await client.connect();

    return instance;
}

module.exports = {getConnection};

