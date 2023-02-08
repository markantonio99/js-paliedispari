 
 const buttonElement = document.getElementById('button')
 console.log(buttonElement)

// aggancio ddl tasto
 buttonElement.addEventListener('click', function()) {
    console.log('lancia dadi')

// aggancio ddl numero inserito
   let numEle = document.getElementById('numeroutente')

// cambio da stringa a numero
   let numInserito = parseInt(numEle.value) 
   console.log(numInserito)
   
// aggancio della select per la scelta gioco 
   let sceltanumeri = document.getElementById('select')
   console.log(sceltanumeri)

 //creazione variabile dell modalità di gioco  
   let modSceltaNum = sceltanumeri.value
   console.log(modSceltaNum)

 //creazione variabile della  somma numero utente + numero pc
  let numeroTotale = numbergenerate + numInserito
  console.log(numeroTotale)

 //creazione variabile per stabilire numero pari
  let numPari = numeroTotale % 2 === 0

//creazione variabile vuota per riempirla con il risultato??
  let risultatoFinale = ""


  //creazione prima condizione se il numero tattale creato è uguale ad un nnumero pari
     if ( numeroTotale === numPari ){
             
            if ( sceltanumeri === 'pari' ){
                risultatoFinale.innerHTML = 'Hai' + ' Vinto ' 
            }
            elae if (sceltanumeri === 'dispari'){

                risultatoFinale.innerHTML = 'Hai' + ' Perso ' 
            }
         
         }

    else if (numeroTotale != numPari){
        
        if ( sceltanumeri === 'pari' ){
            risultatoFinale.innerHTML = 'Hai' + ' Vinto ' 
        }
        elae if (sceltanumeri === 'dispari'){

            risultatoFinale.innerHTML = 'Hai' + ' Perso ' 
        }

    else {

        risultatoFinale.innerHTML = 'Hai' + ' Pareggiato ' 
    }




 }
    function numbergenerate(val){
    const numeroPc = Math.floor(Math.random() * (6 - 1) + 1);
 }














// agganciare bottone ad addEventListener
//
// creare casella di scelta se pari o dispari
//
// creare casella di inserimento numero 
// creare una variabile con value pere registrare il numero inserito
// // farsi dare un numero dal cliente

// 
// 
// creare la funzione di numeri random
// 
// 
// 
// 
// 



