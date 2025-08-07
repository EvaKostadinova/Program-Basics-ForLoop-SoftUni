function hospital(input) { 
    let index = 0; 
    let period = Number(input[index]); 
    index++; 
    let doctors = 7; 
    let treatedPatients = 0; 
    let untreatedPatients = 0; 

    for (let i = 1; i <= period; i++) { 
        let patients = Number(input[index]); 
        index++; 
        
        if (i % 3 === 0 && untreatedPatients > treatedPatients) { 
            doctors++; 
        } 

        if (doctors >= patients) { 
            treatedPatients += patients; 
        } else { 
            treatedPatients += doctors; 
            untreatedPatients += (patients - doctors); 
        } 
    } 
    
    console.log(`Treated patients: ${treatedPatients}.`); 
    console.log(`Untreated patients: ${untreatedPatients}.`); 
}

hospital([4, 7, 27, 9, 1]);