/**
 * Crée et renvoie un tableau de longueur n
 * @param {Number} n 
 */

function createTab(n) {
  let tab = Array(n);
  for(let i = 0; i < n; i++) {
    tab[i] = Math.floor(100 * Math.random());
  }
  return tab;
}

/**
 * Crée et renvoie la fusion de tab1 et tab2
 * @param {Number[]} tab1 
 * @param {Number[]} tab2 
 */
function mergeTables(tab1, tab2) {
  let i1 = 0;
  let i2 = 0;
  let n1 = tab1.length;
  let n2 = tab2.length;
  let tab = [];
  for(let i = 0; i < (n1+n2); i++) {
    if(tab1[i1] <= tab2[i2]) {
      tab[i] = tab1[i1];
      i1++;
    } else {
      tab[i] = tab2[i2];
      i2++;
    }
  }
  return tab;
}


let tab1 = createTab(20);
let tab2 = createTab(20);
let tab3 = mergeTables(tab1, tab2);

console.table(tab3);