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