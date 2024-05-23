let numPersonas = prompt('Cuantos pacientes se van a evaluar?');
let nivelesHem = [];

for (let i = 1; i <= numPersonas; i++){
    let genero = prompt(`Ingresa el genero de la persona ${i} (1: Femenino 2: Masculino)`);
    alert(`Ingresa los niveles de hemoglobina de la persona ${i}`)
    for (let j = 1; j <= 7; j++){
        let hemoglobina = prompt('Nivel día ' + j);
    }
}