#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([
    {
        name: "firstnumber",
        type: "number",
        message: "Please Enter Your First Number",
    },
    {
        name: "operator",
        type: "list",
        choices: ["addition", "substraction", "multipilication", "division"],
        message: "Please Select a One Operator....",
    },
    {
        name: "secondnumber",
        type: "number",
        message: "Please Enter Your Second Number",
    },
]);
if (answers.operator === "addition") {
    console.log(chalk.blue.bold `Here is Your Answer : `, answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "substraction") {
    console.log(chalk.yellow.bold `Here is Your Answer :`, answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "multipilication") {
    console.log(chalk.gray.bold `Here is Your Answer :`, answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "division") {
    console.log(chalk.green.bold `Here is Your Answer :`, answers.firstnumber / answers.secondnumber);
}
else {
    console.log("Please Try Again");
}
