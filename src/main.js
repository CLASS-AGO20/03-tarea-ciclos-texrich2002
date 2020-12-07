export default class App {
    sumatoriaSerieUno(numero) {
        let suma = 1;
        for (let i = 2; i <= numero; i++) {
          suma = suma + 1 / i;
        }
        return suma;
      }
    
      sumatoriaSerieDos(numero) {
        let suma = 1;
        for (let i = 2; i <= numero; i++) {
          if (i % 2 === 0) {
            suma = suma + 1 / i;
          } else {
            suma = suma - 1 / i;
          }
        }
        return suma;
      }
    
      esPrimo(numero){
    
      }
}

let app = new App();
console.log("Funcion sumatoria de la serie uno: ");
console.log(app.sumatoriaSerieUno(5));
console.log(app.sumatoriaSerieUno(10));
console.log(app.sumatoriaSerieUno(15));
console.log("");
console.log("Funcion sumatoria de la serie dos: ");
console.log(app.sumatoriaSerieDos(5));
console.log(app.sumatoriaSerieDos(10));
console.log(app.sumatoriaSerieDos(15));
console.log("Funcion si un numero es primo o no:");
