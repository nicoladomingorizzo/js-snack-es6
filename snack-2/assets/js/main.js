/* Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const serieaTop10 = [
    { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Atalanta', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Fiorentina', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Lazio', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Bologna', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Como', puntiFatti: 0, falliSubiti: 0 }
]//array di oggetti

let squadreFalliSubiti = []; //array vuota per i falli subiti

function getRandonNumber(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
} //Funzione per generare numeri casuali da min a max

for (let i = 0; i < serieaTop10.length; i++) {
    const team = serieaTop10[i]

    team.puntiFatti = getRandonNumber(30, 100); //punti fatti
    team.falliSubiti = getRandonNumber(200, 500); //falli subiti
}
console.log(serieaTop10)

for (let i = 0; i < serieaTop10.length; i++) {

    squadreFalliSubiti.push(
        {
            nome: serieaTop10[i].nome, falliSubiti: serieaTop10[i].falliSubiti
        }); // aggiungo all'array vuota i nomi delle swuadre e i falli subiti
}
console.log(squadreFalliSubiti);

console.log(serieaTop10);
console.table(serieaTop10);
