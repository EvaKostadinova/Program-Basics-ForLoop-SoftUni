function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let pointsFromStart = Number(input[1]);
    let points = 0;
    let winsCount = 0;

    for (let i = 2; i < input.length; i++){
        let result = input[i];

        if (result === `W`) points += 2000, winsCount++;
        else if (result === `F`) points += 1200;
        else if (result === `SF`) points += 720;
        
    }

    console.log(`Final points: ${points + pointsFromStart}`);
    console.log(`Average points: ${Math.floor(points / tournaments)}`);
    console.log(`${((winsCount/tournaments) * 100).toFixed(2)}%`);

}

tennisRanklist(["4",

"750",

"SF",

"W",

"SF",

"W"]);