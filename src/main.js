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
    let i;
    if(numero == 0 | numero == 1 | numero == 4){
        return false;
    }

    for(i=2; i<numero/2; i++){
        if(numero % i == 0){
            return false;
        }
    }
    return true;
    }

    obtenerMultiplo(inicio, fin){
        if(inicio > fin){
            let t = inicio;
            inicio = fin;
            fin = t;
        }
        let i = inicio;
        let string = "";
        do {
            if(i % 3 == 0)
                string += i.toString();

            i++;
        }while(i<=fin);
        return string;
    }
    obtenerImpares(n1, n2){
    let string = "";
    if(n1 < n2) {
        let aux = n1;
        n1 = n2;
        n2 = aux;
    }
    for(let i = n1; i>= n2; i--){
        if(i % 2 != 0){
            string += i;
            if(i != n2){
                string += ',';
            }
        }

            
    }

    return string;
    }
}

let app = new App();

console.log("Funcion sumatoria de la serie uno:");
console.log(app.sumatoriaSerieUno(5));
console.log(app.sumatoriaSerieUno(10));
console.log(app.sumatoriaSerieUno(15));
console.log("");
console.log("Funcion sumatoria de la serie dos:");
console.log(app.sumatoriaSerieDos(5));
console.log(app.sumatoriaSerieDos(10));
console.log(app.sumatoriaSerieDos(15));
console.log("");
console.log("Funcion si un numero es primo o no:");
console.log(app.esPrimo(0));
console.log(app.esPrimo(7));
console.log("");
console.log("Funcion multiplos de un rango convertidos a string:");
console.log(app.obtenerMultiplo(20,35));
console.log("");
console.log("Funcion numeros impares dentro de un rango convertidos a string:");
console.log(app.obtenerImpares(12,1));