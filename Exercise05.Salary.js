function salary(input) {
    
    let salary = Number(input[1]);

    for (i = 2; i < input.length; i++){
        let website = input[i];

        if (website === `Facebook`) salary -= 150;
        if (website === `Instagram`) salary -= 100;
        if (website === `Reddit`) salary -= 50;

    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`);
        return;
    }

    console.log(Math.floor(salary));

}

salary([3,

500,

"Github.com",

"Stackoverflow.com",

"softuni.bg"]);