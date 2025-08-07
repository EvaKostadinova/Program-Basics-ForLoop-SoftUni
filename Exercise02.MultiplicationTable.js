function multiplicationTable(num) {
    for (i = 1; i <= 10; i++) {
        let result = i * num;
        console.log(`${i} * ${num} = ${result}`);
    }
}

multiplicationTable(5);