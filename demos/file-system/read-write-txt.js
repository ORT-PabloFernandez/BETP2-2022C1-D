const fs = require('fs');

let texto = fs.readFileSync('./texto.txt', 'utf-8');

texto += `
Esto es otra linea de texto
`
fs.writeFileSync('./texto.txt', texto);

console.log(texto);