const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question(`Enter Number`, response  => {
            const covertedNum = parseInt(response)  //USES PARSE INT
            
            sum += covertedNum; // INCREASES SUM

            console.log(`You entered ${covertedNum}, so your current sum is ${sum}`) //CONSOLES LOG IT

            addNumbers(sum, numsLeft - 1, completionCallback) //RECURSIVELY CALLS ADDNUMBERS AGAIN PASSING:
                                                                // INREASED SUM, DECREASED NUMS LEF, SAME COMPLETIONCALLBACK
        })
    } else {
        completionCallback(sum);
    }

}

// Their test they want us to run
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));