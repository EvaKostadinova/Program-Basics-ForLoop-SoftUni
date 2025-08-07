function trekkingMania(input) {
    let groupsCount = Number(input[0]);
    let groupMussala = 0, groupMonblan = 0, groupKilimandzharo = 0, groupK2 = 0, groupEverest = 0;

    let totalPeople = 0;
    
    for (i = 1; i <= groupsCount; i++){
        let peopleInGroup = Number(input[i]);
        totalPeople += peopleInGroup;

        if (peopleInGroup <= 5) groupMussala += peopleInGroup;
        else if (peopleInGroup <= 12) groupMonblan += peopleInGroup;
        else if (peopleInGroup <= 25) groupKilimandzharo += peopleInGroup;
        else if (peopleInGroup <= 40) groupK2 += peopleInGroup;
        else if (peopleInGroup >= 41) groupEverest += peopleInGroup;

    }

    console.log(`${(groupMussala/totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupMonblan/totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupKilimandzharo/totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupK2/totalPeople * 100).toFixed(2)}%`);
    console.log(`${(groupEverest/totalPeople * 100).toFixed(2)}%`);

}

trekkingMania(["10",

"10",

"5",

"1",

"100", "12", "26", "17", "37", "40", "78"]);