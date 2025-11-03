const form = document.getElementById("form");
const btnRecherhce = document.getElementById("bouton");
const champRecherche = document.getElementById("input");

//Appel de l'api
async function getData(valeur) {
    //Affiche un chargment le temps que l'api réponde
    btnRecherhce.textContent = "Chargement ...";
    btnRecherhce.disabled = true;

    try{
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(valeur)}`);
        const data = await response.json();            
        return data;        
    } catch(error) {
         console.error( error);
        } finally {
            //une fois que l'api réponds le bouton reprends son ancien nom
            btnRecherhce.textContent = "Rechercher";
            btnRecherhce.disabled = false;
        }
}


btnRecherhce.addEventListener('click', ()=> {
    const valeur = champRecherche.value.trim();

    if(!valeur) {
        console.warn("Veuillez saisir un terme de recherche !");
        return;
    }
    
    getData(valeur);
});
