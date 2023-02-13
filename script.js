/**
 * Crée un tableau de longueur n
 * @param {Number} n 
 */

function createTab(n) {
  let tab = Array(n);
  for(let i = 0; i < n; i++) {
    tab[i] = Math.floor(100 * Math.random());
  }
  return tab;
}
