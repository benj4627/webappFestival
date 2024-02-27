//Vælger de relevante knapper i HTML
let btnOptions = document.querySelectorAll('.option');

//Looper igennem hver knap med forEach
btnOptions.forEach(function(btnOption) {
    //tjekker om nogle af knapperne har "default" og hvis ja sætter default styling når siden loades. 
   if (btnOption.classList.contains("default")) {
    // Styler default på den relevante knap
    btnOption.style.backgroundColor = "#FB8B24";
    btnOption.style.color = "white";
    } 
  //Tilføjer en eventlistener som lytter efter klik
  btnOption.addEventListener("click", function() {

    //Sikre at kun den klikkede knap er aktiv og at farvet anderledes end de andre. Nulstiller alle knapper før den så tildeler ny styling.
    btnOptions.forEach(function(otherBtn) {
        otherBtn.style.backgroundColor = "";
        otherBtn.style.color = "";
    });

    // Farverne som skal tilføjes til den valgte knap
    this.style.backgroundColor = "#FB8B24";
    this.style.color = "white";
  });
});

//Tjekker om den nuværende URL har det relevante ord som en del af den.
if (window.location.href.includes("program") || window.location.href.includes('scene') || window.location.href.includes('Scene')) {
    //vælger ikoner i navigation og styler den som aktiv
    let program = document.querySelector("#programIkon i");
    program.style.color = "#FB8B24";

    //vælger p elementet i navigationen og styler den som aktiv
    let programPara = document.querySelector ("#programIkon p")
    programPara.style.color = "#FB8B24";
  };
 

