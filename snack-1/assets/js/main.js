/*
Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
*/

const bikes = [
    {
        name: 'mountain bike',
        weight: 11000
    },
    {
        name: 'racing bike',
        weight: 7000
    },
    {
        name: 'e bike',
        weight: 20000
    },
    {
        name: 'gravel bike',
        weight: 8500
    },
    {
        name: 'cycle touring bike',
        weight: 18000
    },
]

let lighterBike = bikes[0];

for (let i = 0; i < bikes.length; i++) {
    const singleBike = bikes[i];
    if (singleBike.weight < lighterBike.weight) { //prima avevo messo singlebike.weight, ma giustamente mi dava come risultato il primo oggetto dell'array, adesso mi da errore dicendo che il weight non è stabilito
        lighterBike = singleBike;
    }
}

alert(`La bici più leggera nella lista delle biciclette è : ${lighterBike.name}, ed il suo perso è ${lighterBike.weight}`);

