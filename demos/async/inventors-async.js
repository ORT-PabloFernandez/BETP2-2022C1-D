
// 1.- Leer el archivo inventors.json
// 2.- añadir un nuevo inventor
// 3.- escribir en el json incluyendo el nuevo inventor
// 4.- Leer el archivo con el nuevo inventor
// UTILIZANDO SOLO FUNCIONES ASINCRONAS DE LECTURA Y ESCRITURA

import { Console } from 'console';
import fs from 'fs';
const PATH = './inventors.json';
const nuevoInventor = {
    first: "Pablo",
    last: "Fernandez",
    year: 1976
};

// 1.- Lectura
fs.readFile(PATH, 'utf-8', (err, data) =>{
    if(!err){
        const inventors = JSON.parse(data);
        // 2.- Add
        inventors.push(nuevoInventor);
        // 3.- Write
        fs.writeFile(PATH, JSON.stringify(inventors, null, ' '), err => {
            if(!err){                
                fs.readFile(PATH, 'utf-8', (err, data)=>{
                    if(!err){
                        console.log(JSON.parse(data));
                    }                    
                });
            }
        });
    }
});




