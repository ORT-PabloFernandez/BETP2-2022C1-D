// 1.- Leer el archivo inventors.json
// 2.- añadir un nuevo inventor
// 3.- escribir en el json incluyendo el nuevo inventor
// 4.- Leer el archivo con el nuevo inventor
// UTILIZANDO PROMESAS DE LECTURA Y ESCRITURA
import fs from 'fs/promises';
const path = './inventors.json';
const nuevoInventor = {
    first: "Pablo",
    last: "Fernandez",
    year: 1976
};

function getIventors(){    
    return fs.readFile(path, 'utf-8');
}

async function addInventor(inventor){
    const data = await getIventors();
    const inventors = JSON.parse(data);
    inventors.push(inventor);
    return inventors;    
}

function writeInventors(inventors){
    return fs.writeFile(path, JSON.stringify(inventors, null, ' '));
}

//2. add
let inventors = await addInventor(nuevoInventor);
await writeInventors(inventors);
inventors = await getIventors();

console.log(JSON.parse(inventors));
