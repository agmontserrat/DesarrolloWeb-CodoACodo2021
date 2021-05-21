// Sentencias de control cíclicas

// FOR

//Primer parámetro: variable contadora
//Segundo: condición de frenado
//Tercero: Incrementador
for (let i = 0; i < 10; i = i + 1){

    // if ( i == 1 || i ==  10){
    //     console.log(`Vuelta numero ${i}`);
    // }
    // else {
    //     console.log(`Este no sale ${i}`)
    // }

    if (!(i >=2 && i <=9)){
        console.log(`Vuelta numero ${i}`);
    }
}

// Incrementos. Variables contadoras.

let numero = 0;

numero++; // numero = numero + 1;

numero+=2; // numero = numero + 2
