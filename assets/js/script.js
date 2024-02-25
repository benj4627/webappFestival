//Vælger de relevante knapper i HTML
let btnOptions = document.querySelectorAll('.option');

//Looper igennem hver knap med forEach
btnOptions.forEach(function(btnOption) {

  //Tilføjer en eventlistener som lytter efter klik
  btnOption.addEventListener("click", function() {

    //Sikre at kun den klikkede knap har er aktiv og er farvet anderledes end de andre. Nulstiller alle knapper 
    btnOptions.forEach(function(otherBtn) {
        otherBtn.style.backgroundColor = "";
        otherBtn.style.color = "";
    });

    // Farverne som skal tilføjes til den valgte knap
    this.style.backgroundColor = "#FB8B24";
    this.style.color = "white";
  });
});

//Tjekker om den nuværende URL har det relevante ord som en del af den
if (window.location.href.includes("program") || window.location.href.includes('scene') || window.location.href.includes('schedule'))

{
    //vælger ikoner i navigation og styler den som aktiv
    let program = document.querySelector("#programIkon i");
    program.style.color = "#FB8B24";

    //vælger p elementet i navigationen og styler den som aktiv
    let programPara = document.querySelector ("#programIkon p")
    programPara.style.color = "#FB8B24";
  };



  
// //Finder de relevante button og list og gemmer dem i variabler
// let allButtons = document.querySelectorAll(".option"); 
// let allLists = document.querySelectorAll(".programList"); 

// // Lytter efter click på alle knapperne via forEach, og når en knap bliver trykket på, looper den igennem programlists og gemmer i et array
// allButtons.forEach(function(button) {
//     button.addEventListener("click", function() {
  
//       allLists.forEach(function(list) {
//         let itemsArray = Array.from(list.children);
  
//         // Bruger math.random til at sortere listerne tilfæligt
//         itemsArray.sort(function() {
//           return Math.random() - 0.5;
//         });
  
//         // Tømmer indholdet i listerne og sætte nye placeringer ind
//         list.innerHTML = "";
//         list.append(...itemsArray);
//       });
//     });
//   });
 

