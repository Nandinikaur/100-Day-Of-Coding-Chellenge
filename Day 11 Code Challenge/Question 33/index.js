#! /usr/bin/env node
//Nandini_kaur 16-05-2024;
import chalk from "chalk";
/*
Ordinal Numbers: Ordinal numbers indicate their position in an array, such as 1st or 2nd. Most ordinal numbers end in the,
 except 1, 2, and 3.

• Store the numbers 1 through 9 in an array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read
"1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/
console.log(chalk.bold.yellow("\n\t>>ARRAYS OF NUMBER<<<\n\t"));
let ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinal_numbers.length; i++) {
    let numbers = ordinal_numbers[i];
    let number_output;
    if (numbers === 1) {
        number_output = "st";
    }
    else if (numbers === 2) {
        number_output = "nd";
    }
    else if (numbers === 3) {
        number_output = "rd";
    }
    else {
        number_output = "th";
    }
    console.log(`${numbers}${number_output}`);
}
