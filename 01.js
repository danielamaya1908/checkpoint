const { Queue } = require("../DS");
/*⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

1️⃣ ***** EJERCICIO 1 ***** - henryHospital() 1️⃣
¡Tenemos complicaciones! 
En nuestro hospital se formó una fila de personas quede deben ser atendidas. Tendrás que filtrar a los pacientes.
Aquellos pacientes que ya fueron atendidos deberás agregarlos a una nueva Queue llamada "Atendidas". Quienes aún
no han sido atendidos serán agregados a otra Queue llamada "EnEspera".

¿Cómo saber quienes serán atendidos? La doctora del hospital solo atiende a las personas:
 - Con una edad igual o mayor a 18 años. 
 - Además su altura sea superior a 150 cm.
Las personas que no cumplan con estos requisitos quedarán en espera.

📝 EJEMPLO 📝
(INPUT) ➡
Queue {
 array: [
   { nombre: 'Carol', edad: 24, altura: 146 },
   { nombre: 'Gonzalo', edad: 24, altura: 184 },
   { Nombre: 'Micaias', edad: 20, altura: 181 },
   { Nombre: 'Coraline', edad: 22, altura: 165 },
   { Nombre: 'Marcos', edad: 19, altura: 154 },
   { nombre: 'Mati', edad: 14, altura: 175 }
 ]
}

(OUTPUT) ➡
let ejemplo = {
 Atendidas: Queue {
   array: [
     { nombre: 'Gonzalo', edad: 24, altura: 184 },
     { Nombre: 'Micaias', edad: 20, altura: 181 },
     { Nombre: 'Coraline', edad: 22, altura: 165 },
     { Nombre: 'Marcos', edad: 19, altura: 154 }
   ]
 },
 EnEspera:  Queue {
   array: [
     { nombre: 'Carol', edad: 24, altura: 146 },
     { nombre: 'Mati', edad: 14, altura: 175 }
   ]
 }
}

REQUISITOS
 🟢 La función debe retornar el objeto con las propiedades Atendidas y EnEspera, sus valores son QUEUE con los datos esperados.
 🟢 Las QUEUE que retorna la función deben ser una instancia de la clase QUEUE.
*/

function henryHospital(lista) {
  // Tu código aquí:
  const atendidos = new Queue();
  const enEspera = new Queue();

  while (lista.array.length > 0) {
    const paciente = lista.dequeue();

    if (paciente.edad >= 18 && paciente.altura > 150) {
      atendidos.enqueue(paciente);
    } else {
      enEspera.enqueue(paciente);
    }
  }

  return {
    Atendidas: atendidos,
    EnEspera: enEspera,
  };
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  henryHospital,
};
