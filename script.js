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
 * Crée et renvoie la fusion de deux tableaux triés
 * @param {Number[]} tab1 le premier tableau trié
 * @param {Number[]} tab2 le second tableau trié
 */
function mergeTables(tab1, tab2) {
  let i1 = 0;
  let i2 = 0;
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
/**
 * Renvoie le tableau dont les éléments sont triés dans l'ordre croissant
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

let tab1 = createTab(20);
let tab2 = createTab(20);
tab1 = sortTable(tab1);
tab2 = sortTable(tab2);
let tab3 = mergeTables(tab1, tab2);
//tab3 = sortTable(tab3);

console.table(tab3);

console.log(tab3[tab3.length/2]); // Ou bien console.log(tab3[(tab3.length/2) - 1]);