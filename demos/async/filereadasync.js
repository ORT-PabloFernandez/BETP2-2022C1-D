// const fs = require('fs');
import fs from 'fs';

let datos = '';

fs.readFile('./bigfile.txt', 'utf-8', (err,data) =>{
    if(!err)
    {
        console.log('Se ejecuto correctamente');
        datos = data;
        console.log(datos);
    }
});

console.log("datos:", datos);



