 
 const buttonElement = document.getElementById('button')
 console.log(buttonElement)


 buttonElement.addEventListener('click', function()) {
    console.log('lancia dadi')


   let numEle = document.getElementById('numeroutente')

   let numInserito = parseInt(numEle.value) 
   console.log(numInserito)

   let sceltanumeri = document.getElementById('select')
   console.log(sceltanumeri)

   let modSceltaNum = sceltanumeri.value
   console.log(modSceltaNum)


  let numeroTotale = numbergenerate + numInserito
  console.log(numeroTotale)


  let numPari = numeroTotale % 2 === 0

  let risultatoFinale = ""

     if ( numeroTotale === 'pari' ){
       
          risultatoFinale.innerHTML = 'Hai' + ' Vinto ' 
         }

    else if (numeroTotale != numPari){
        
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



