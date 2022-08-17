"use strict";

ol.innerHTML = localStorage.getItem("liste");

const newSpan = document.querySelectorAll(".storage");
for (let span of newSpan) {
  span.onclick = () => delTask(span.parentElement);
}

// Ajoute un nouveau élément à la liste quand on clique sur le bouton ajouter

form.onsubmit = () => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.classList.add("storage");
    span.innerHTML = "<img src='images/delete.png' class='corbeille'>";

    span.onclick = () => {
      delTask(li);
  }

    li.innerHTML = inputText.value

    li.appendChild(span);

    ol.appendChild(li);

    inputText.value = "";

    localStorage.setItem("liste", ol.innerHTML);

    return false;
    //la même chose que si on met un event.preventDefault();
}




//Supprimer la tâche quand on clique sur la croix

function delTask (element) {
  element.remove();
  localStorage.setItem("liste", ol.innerHTML);
  //On rajoute un local storage pour qu'il garde les tâches actuelles, il va donc effacer du storage le tâches déjà effacées
}



//Barrer l'élément quand on clique dessus
let eltBarre = document.querySelector("ol");

function eltChecked(ev){
    if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('done');
          }
        } false;  

eltBarre.addEventListener('click', eltChecked);