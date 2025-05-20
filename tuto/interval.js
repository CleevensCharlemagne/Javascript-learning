count = 5;
const t = setInterval(() => {
    console.log(`Hi guys!!!`);
    count--;

    if (count === 0) {
        clearInterval(t);
    }
}, 1000);

function decompte(valeur) {
    const t = setInterval(() => {
      console.log(valeur);
      valeur--;

      if (valeur === -1) {
        clearInterval(t);
      }
    }, 1000);
  }

function decompte2(n){

    console.log(n);
    if (n === 0){
        return;
    }
    setTimeout(()=>{
        decompte2(n-1)
    }, 1000);
}