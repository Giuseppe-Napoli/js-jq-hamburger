// il primo passo utilizzando JQUERY è richiamere il DOM in una funzione 
$(document).ready(function(){

  // per facilitare la lettura del codice creo le variabili che richiameranno i punti da selezionare sull'html
  var iconHamburger = $(".fa-bars");
  var iconClose = $(".fa-times");
  var hamburger = $(".hamburger-menu");

  //1) Funzione: quando cliccherò l'icona dell'hamburger apparirà il menu
  iconHamburger.click(function(){
    hamburger.show();
  });

  //2) Funzione: quando cliccherò l'icona con la 'X' il menu sparirà
  iconClose.click(function(){
    hamburger.hide();
  });
  
});
