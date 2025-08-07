function oscars(input) {
    let nameOfActor = input[0];
    let academyPoints = Number(input[1]);
    let juryCount = Number(input[2]);
    
    let index = 3;

    for (let i = 0; i < juryCount; i++) {
        let judgeName = input[index++];
        let judgePoints = Number(input[index++]);

        let addedPoints = (judgeName.length * judgePoints) / 2;
        academyPoints += addedPoints;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            return;
        }
    }

    let neededPoints = 1250.5 - academyPoints;
    console.log(`Sorry, ${nameOfActor} you need ${neededPoints.toFixed(1)} more!`);

}

oscars(["Zahari Baharov", "205", 4, "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);