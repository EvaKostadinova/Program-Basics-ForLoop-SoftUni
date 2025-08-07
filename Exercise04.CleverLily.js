function cleverLily(age, washerPrice, toyPrice) {
    let money = 0;
    let toyCount = 0;
    let giftMoney = 10;
    let takenMoney = 0;

    for (i = 1; i <= age; i++){
        if(i % 2 === 0){
            money += giftMoney;
            giftMoney += 10;
            takenMoney += 1;
        } else {
            toyCount++;
        }
    }

    let totalMoney = money - takenMoney + (toyCount * toyPrice);
    let diff = Math.abs(totalMoney - washerPrice).toFixed(2);

    if (totalMoney >= washerPrice){
        console.log(`Yes! ${diff}`);
    } else {
        console.log(`No! ${diff}`);
    }

}

cleverLily(10,

170.00,

6);