// 1.- Leer el archivo inventors.json
// 2.- añadir un nuevo inventor
// 3.- escribir en el json incluyendo el nuevo inventor
// 4.- Leer el archivo con el nuevo inventor
// UTILIZANDO PROMESAS DE LECTURA Y ESCRITURA

import { Console } from 'console';
import fs from 'fs/promises';
const path = './inventors.json';
const nuevoInventor = {
    first: "Pablo",
    last: "Fernandez",
    year: 1976
};

// 1.- Read
fs.readFile(path, 'utf-8')
    .then(data => {
        const inventors = JSON.parse(data);
        // 2.- Add
        inventors.push(nuevoInventor);
        // 3.- Write
        return fs.writeFile(path, JSON.stringify(inventors, null, ' '));
    })
    .then( () => {
        // 4.- Read
        return fs.readFile(path, 'utf-8');
    })
    .then(data => {
        console.log(JSON.parse(data));
    })
    .catch(error => {
        console.log(error.message);
    });


