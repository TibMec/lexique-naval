 /* 
 - Bonus: bg-color = drapeau pour les lettres de recherche
- Alignement input
- Footer pour sources
- Responsive
- Déco lettres titre
- 2 colonnes pour les réponses ?
- anglais en couleur différente pour les réponses ? (crée span en ?)
- roue tournantes + transitions
 */

// Fonction de recherche
  function searchTerms(event) {

      var input, filter, gridContainer, terms, termFr, termEn, voc, list, i;
      input = document.getElementById('searchInput');
      filter = input.value.toUpperCase();
      gridContainer = document.querySelector('.grid-container');
      terms = gridContainer.querySelectorAll('.term-fr');
      voc = document.getElementById('voc');
      list = [];

      voc.innerHTML = '';
      
    if (input.value.length >= 2) {
      for (i = 0; i < terms.length; i++) {
        termFr = terms[i];
        termEn = termFr.nextElementSibling;
        // Sélectionne le terme anglais associé
        if (termFr.innerHTML.toUpperCase().indexOf(filter) > -1 || termEn.innerHTML.toUpperCase().indexOf(filter) > -1) {
          console.log('Mot trouvé: ', termFr, termEn, );
          // termEn.style.color = 'red';
          list.push([termFr, termEn, `${termFr.innerHTML}:  ${termEn.innerHTML}`])
        }
      }
      if (list.length !== 0) {
        console.log('Liste présentée');
        console.log(list);
        const ul = document.createElement('ul');
        
        list.map(def => {
        // const li = document.createElement('li');
        //   li.classList.add('showedDef');
        //   console.log('def', def[2])
        //   ul.appendChild(li).innerText = def[2];
          
          ul.innerHTML += `<li class='showedDef'>
              <span class='frShowed'>${def[0].innerHTML}</span>: &nbsp;<span class='enShowed'>${def[1].innerHTML}</span>
            </li>
          `
        })
        console.log(ul)
         voc.appendChild(ul);
      } else {
        console.log('Mot non trouvé');
        termFr.parentElement.style.display = 'none';
        voc.innerHTML = 'Mot non trouvé';
      }
    }
    
    console.log(input.value)
    console.log(!!input.value)
  }

  // Attachez la fonction de recherche à l'événement keydown du champ de recherche
  document.getElementById('searchInput').addEventListener('change', searchTerms);

const goTop = document.querySelector('.button-wrapper');


window.onscroll = () => {
    // console.log('window.pageYOffset = ', window.pageYOffset);
  window.pageYOffset > 100 ?
    goTop.style.opacity = 1
    :goTop.style.opacity = 0
}
