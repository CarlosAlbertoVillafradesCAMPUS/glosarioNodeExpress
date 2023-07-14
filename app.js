// codificacion de caracteres de la entrada
process.stdin.setEncoding('utf8');

// Escuchamos la entrada de datos
process.stdin.on('data', (input)=>{
    // Quitamos el espaciado cuando accionamos el enter
    input = input.trim();
    console.log(`El dato de entra es ${input}`);
    // termina el proceso
    process.exit()
})