/* 6️⃣ ** EJERCICIO 6 ** - Recursión numHabitaciones() 6️⃣

A los pacientes de nuestro hospital se les asigna una abitación de forma secuencial. Cada habitación tiene una 
capacidad máxima de pacientes. Si una habitación está llena se debe abrir una nueva. Necesitamos que escribas 
una función que reciba dos números por parámetros:
  - La cantidad de pacientes.
  - La capacidad de pacientes por habitación.

De forma recursiva debe calcular el número total de habitaciones necesarias que se deben abrir para acomodar 
a todos los pacientes en un hospital. 

📝 EJEMPLO 📝
(INPUT) ➡ numHabitaciones(30, 4)
(OUTPUT) ➡ 8

(INPUT) ➡ numHabitaciones(35, 5)
(OUTPUT) ➡ 7

REQUISITOS
🟢 Este ejercicio debe ser resuelto utilizando RECURSIÓN. Si utilizas los métodos Math.ceil o Math.floor, los tests fallarán
*/


function numHabitaciones(pacientes, capacidad) {
  // Tu código aquí:
  if (pacientes <= 0) {
    return 0;
  }

  return 1 + numHabitaciones(pacientes - capacidad, capacidad);
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = numHabitaciones;
