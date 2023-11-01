const parolaInserita = prompt('inserisci una parola');
function giraParola(parola){
    let  parolaGirata = '';
   for(let i = parola.length -1; i>= 0; i--){
    parolaGirata+=parola[i];
   }
   return parolaGirata;
}  
const parolaGirata = giraParola(parolaInserita);
console.log(parolaGirata);