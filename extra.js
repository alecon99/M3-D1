/* esercizio extra 1 */
/* EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente. */

/* function cancella(){
    let lista = document.querySelector(".p-4:last-child li:nth-of-type(2)");
    lista.remove()
}

window.onload = cancella() */

/* esercizio extra 2 */
/* EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM  cliccando sul link "Continua a leggere". */

/* let link = document.getElementsByClassName("stretched-link");

for(let deleteItem of link){
    deleteItem.addEventListener("click", (event)=>{
        event.target.parentNode.parentNode.parentNode.remove();
    })
}; */

/* esercizio extra 3 */
// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

/* metodo 1 */
/* 
let autore = document.querySelectorAll(".blog-post-meta a");


for(let allert of autore){
    allert.addEventListener("mouseover", (event)=>{
        alert(event.target.innerHTML)
    })
}; */

/* metodo 2 */
/* 
let autore = document.querySelectorAll(".blog-post-meta a");

for (let i = 0; i < autore.length; i++) {
    autore[i].addEventListener('mouseover', function onOver() {
        alert(autore[i].innerHTML);
        console.log(autore[i].innerText);    
   })
} */