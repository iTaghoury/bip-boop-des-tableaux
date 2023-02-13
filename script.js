
/**
 * 
 * @param {Number} n La longueur du tableau
 * @returns Le tableau de longueur n dont les éléments sont triés dans l'ordre croissant
 */
function createTabRec(n) {
  if(n === 0) {
    return [];
  } else {
    return mergeTables(createTabRec(n-1), [Math.floor(100 * Math.random())]);
  }
}


/**
 * Crée et renvoie la fusion de deux tableaux si les deux tableaux sont triés la fusion aussi
 * @param {Number[]} tab1 le premier tableau
 * @param {Number[]} tab2 le second tableau
 * @returns La fusion des deux tableaux
 */
function mergeTables(tab1, tab2) {
  let n1 = tab1.length;
  let n2 = tab2.length;
  let tab = Array(n1 + n2);

  for(let i = 0; i < n1; i++) {
    tab[i] = tab1[i];
  }
  for(let i = 0; i < n2; i++) {
    let j = n1 - 1;
    for(; j >= 0; j--) {
      if(tab[j] > tab2[i]) {
        tab[j+1] = tab[j];
      } else {
        break;
      }
    }
    n1++;
    tab[j+1] = tab2[i];
  }
  return tab;
}



let tab1 = createTabRec(20);
let tab2 = createTabRec(20);
//tab1 = sortTable(tab1);
//tab2 = sortTable(tab2);

let tab3 = mergeTables(tab1, tab2);

console.table(tab3);
console.log(`Nombre médian : ${tab3[(tab3.length/2) - 1]}`);

/**
 * Crée et renvoie un tableau de longueur n
 * @param {Number} n le nombre d'éléments du tableau
 */

function createTab(n) {
  let tab = Array(n);
  for(let i = 0; i < n; i++) {
    tab[i] = Math.floor(100 * Math.random());
  }
  return tab;
}


/**
 * Renvoie un tableau dont les éléments sont triés dans l'ordre croissant
 * @param {Number[]} tab 
 */
function sortTable(tab) {
  for(let i = 0; i < tab.length-1; i++) {
    for(let j = 0; j < tab.length - i - 1; j++) {
      if(tab[j] > tab[j+1]) { // swap
        let tmp = tab[j];
        tab[j] = tab[j+1];
        tab[j+1] = tmp;
      }
    }
  }
  return tab;
}