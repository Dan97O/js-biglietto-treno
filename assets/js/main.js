/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


// numero km da percorrere
// età del passeggiero
// calcolare il prezzo del viaggio 1km = 0.21€
// sconto 20% ai minorenni
// sconto 40% over 65
// output con massimo due decimali 


// numero km da percorrere
const kilometersToGo = prompt('Quanti chilometri vuoi percorrere?');
console.log(kilometersToGo);

// età del passeggiero
const userAge = prompt('Quanti anni hai?');
console.log(userAge);

// calcolare il prezzo del viaggio 1km = 0.21€

const priceTicket = kilometersToGo * 0.21
console.log(priceTicket);


// -20% <18 anni
// -40% >65 anni
if(userAge < 18){
    const priceTicketYoung = (priceTicket / 100 * 20);
    console.log(priceTicketYoung);
    alert(`il tuo prezzo giovane é ${priceTicketYoung} `)
} else if(userAge >65){
    const priceTicketOld = (priceTicket / 100 * 40);
    console.log(priceTicketOld);
    alert(`il tuo prezzo anziani é ${priceTicketOld} `)
} else{
    alert(`il tuo prezzo normale é ${priceTicket} `)
}



