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
    const singleBike = bikes[i].weight;
    if (singleBike < lighterBike.weight) { //prima avevo messo singlebike.weight, ma giustamente mi dava come risultato il primo oggetto dell'array, adesso mi da errore dicendo che il weight non è stabilito
        lighterBike = singleBike[i];
    }
}

alert(`La bici più leggera nella lista delle biciclette è : ${lighterBike.nome}, ed il suo perso è ${lighterBike.weight}`);

/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const serieA = [
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Fiorentina',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Bologna',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Como',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Torino',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Udinese',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Genoa',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Verona',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Cagliari',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Parma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lecce',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Empoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Venezia',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Monza',
        puntiFatti: 0,
        falliSubiti: 0
    },

]


