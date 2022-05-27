let jardinSalaColor: string[] = ["Azul", "Verde", "Amarillo"];
let jardinSalaCapacidad: number[] = [40, 35, 30];
let sillas: number = 0;

function buscarSala(arreglo: number[], cantidad: number): number {
  let indiceSala: number = -1;
  let auxiliar: number = 0;
  let auxiliar2: number = cantidad;

  for (let i = 0; i < arreglo.length; i++) {
    auxiliar = arreglo[i] - cantidad;
    auxiliar2 = Math.min(auxiliar, auxiliar2);
    if (auxiliar2 >= 0) {
      auxiliar2 = auxiliar;
      indiceSala = i;
    }
  }
  return indiceSala;
}

function imprimirSala(i: number) {
  switch (i) {
    case -1: {
      console.log("No hay capacidad en ningúna sala para esa cantidad de niños");
      break;
    }
    default: {
      console.log(`La sala color ${jardinSalaColor[i]} es la indicada para la cantidad de niños ingresados`);
      break;
    }
  }
}

sillas = Number(prompt("Ingrese la cantidad de niños:"));
imprimirSala(buscarSala(jardinSalaCapacidad, sillas));
