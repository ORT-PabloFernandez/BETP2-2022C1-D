const fs = require('fs');
const PATH = './inventors.json';

let inventors = JSON.parse(fs.readFile(PATH, 'utf-8'));

// TODO 1: Del archivo inventors.json mostrar por consola los nacidos despues del 1800
//inventors = JSON.parse(inventors);

console.log(inventors.filter(inventor => inventor.year > 1800));
// TODO 2: Insertar y persistir un nuevo inventor { first: 'Steve', last: 'Jobs', year: 1955 }

inventors.push({ first: 'Steve', last: 'Jobs', year: 1955 });
console.log(inventors);

fs.writeFileSync(PATH, JSON.stringify(inventors, null, '    '));
