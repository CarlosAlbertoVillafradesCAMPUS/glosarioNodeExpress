let lounge = ["Apolo", "Artemis", "Sputnik"];

const place = ()=>{
    return `Campus classrooms are: '${lounge.join(", ")}'`;
}
  //exporta la funcion place utilizando module.exports
  
module.exports = {
    place
}