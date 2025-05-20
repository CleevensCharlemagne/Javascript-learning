count = 5;
const t = setInterval(() => {
    console.log(`Hi guys!!!`);
    count--;

    if (count === 0) {
        clearInterval(t);
    }
}, 1000);