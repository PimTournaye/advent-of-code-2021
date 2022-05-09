const fs = require('fs');
const SONAR_SWEEP = () => {

    let check = null;
    let largerCount = 0;
    const INPUT = fs.readFileSync('Day 1/Day1-input.txt', 'utf-8', (err, file) => {
        if (err) throw err;
        let data = file.toString().split("\n");
        let arr = [];
        for(i in data) { 
            arr.push(i) 
        }
        return arr;
    });
    let set = INPUT;
    for(data in set) {
        if (data == null) {
            check = data;
        }

        if (check < data) {
            console.log(largerCount);
            largerCount++
            //console.log('larger');
        } else check = data;
    }
    return largerCount;
}

let count = SONAR_SWEEP()

console.log(SONAR_SWEEP());