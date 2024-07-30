import inquirer from "inquirer";

async function runQuiz() {
    const answers = await inquirer.prompt([
        {
            name: "ques1",
            type: "list",
            message: "When is Pakistan's Independence Day: ",
            choices: ["14 August", "10 August", "7 August", "11 August"]
        },
        {
            name: "ques2",
            type: "list",
            message: "When is India's Independence Day: ",
            choices: ["14 August", "15 August", "7 August", "11 August"]
        },
        {
            name: "ques3",
            type: "list",
            message: "Capital of U.S.A is: ",
            choices: ["ChinaTown", "New York", "Texas", "Los Angeles"]
        },
        {
            name: "ques4",
            type: "list",
            message: "The Upper House of UK Parliament is called: ",
            choices: ["House Of Commons", "House Of Lords", "Queen's House", "House Of Labor"]
        },
        {
            name: "ques5",
            type: "list",
            message: "Pakistan announced becoming nuclear state in year:  ",
            choices: ["2022", "1985", "1998", "2002"]
        }
    ]);

    const correctAnswers: { [key: string]: string }  = {
        ques1: "14 August",
        ques2: "15 August",
        ques3: "New York",
        ques4: "House Of Lords",
        ques5: "1998"
    };

    let score = 0;
    for (const key in correctAnswers) {
        if (answers[key] === correctAnswers[key]) {
            score += 1;
        }
    }

    console.log(`Your score is ${score} out of 5.`);
}

runQuiz();