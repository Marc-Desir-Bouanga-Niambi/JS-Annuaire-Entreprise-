const bouton = document.getElementById("bouton");

bouton.addEventListener('click', ()=> {
    const input = document.getElementById("input");
    const valeur = input.value.trim();

    if(!valeur) {
        console.log("Veuillez saisir un livre");
        return;
    }

    async function getData() {
        try{
            const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(valeur)}`);
            const data = await response.json();
            
            console.log(data.docs);
            const p = document.createElement("p");
            p.innerHTML = data.docs[0].author_name;
            document.body.appendChild(p);            
        } catch(error) {
        console.error( error);
    }
}
    getData();
});
