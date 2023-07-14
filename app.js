// Require fs
/*
fs.readFile(path, options, callback):
Lee el contenido de un archivo de forma asincrónica 
 path: Ruta del archivo
 options: Opciones de lectura, como la codificacion
 callback: Funcion de devolucion que recibe err(error) y data(contenido del archivo)
 */
let fs = require('fs');

//Se utiliza el archivo
fs.readFile("demo.txt", 'utf-8', (err,data)=>{
    console.log(data);
})