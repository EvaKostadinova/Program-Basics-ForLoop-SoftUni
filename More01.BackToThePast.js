function backToThePast (moneyInherited, yearOfDeath) {
    for (let i = 1800; i <= yearOfDeath; i++) {
        let age = i - 1800 + 18;
        if (i % 2 === 0) {
            moneyInherited -= 12000;
        } else {
            moneyInherited -= 12000 + 50 * age;
        }
    }

    if (moneyInherited >= 0) console.log(`Yes! He will live a carefree life and will have ${moneyInherited.toFixed(2)} dollars left.`);
    else console.log(`He will need ${Math.abs(moneyInherited).toFixed(2)} dollars to survive.`);
     
}

backToThePast(100000.15, 1808);