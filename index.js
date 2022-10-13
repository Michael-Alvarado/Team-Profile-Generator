const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generateHTML = require('./utils/generateHTML');
const generateCard = require('./utils/generateCard');

const roster = [];
const cards = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'Manager_name',
        message: "What is the team manager's name?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Manager_ID',
        message: "What is the team manager's ID?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Manager_email',
        message: "What is the team manager's email?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Manager_office',
        message: "What is the team manager's office number?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'Engineer_name',
        message: "What is the engineer's name?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Engineer_ID',
        message: "What is the engineer's ID?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Engineer_email',
        message: "What is the engineer's email?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'Intern_name',
        message: "What is the intern's name?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Intern_ID',
        message: "What is the intern's ID?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Intern_email',
        message: "What is the intern's email?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the intern attending?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    }
];

const employeeQuestions = [
    {
        type: 'input',
        name: 'Employee_name',
        message: "What is the employee's name?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Employee_ID',
        message: "What is the employee's ID?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Employee_email',
        message: "What is the employee's email?",
        validate: inputEl => {
            if(inputEl) {
                return true;
            } else {
                console.log('A title is required to continue.');
                return false;
            }
        }
    }
];

function init() {
    createManager();
}

function fillRoster() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'answer',
            message: 'Would you like to add more team members?',
            choices: ['Engineer', 'Intern', 'Generic employee', 'No more members'],
        },
    ]).then(userInput => {
        switch(userInput.answer) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            case 'Generic employee':
                createEmployee(); 
                break;
            case 'No more members':
                for(var i=0; i<roster.length; i++) {
                    cards.push(generateCard(roster[i]));
                };
                generateHTML(cards.join(''));
        }
    });
}

function createManager() {
    console.log("Enter the manager's information:");
    inquirer.prompt(managerQuestions).then(data => {
        console.log(data);
        const manager = new Manager(data.Manager_name, data.Manager_ID, data.Manager_email, data.Manager_office);
        roster.push(manager);
    })
    fillRoster();
}

function createEngineer() {
    console.log("Enter the engineer's information:");
    inquirer.prompt(engineerQuestions).then(data => {
        console.log(data);
        const engineer = new Engineer(data.Engineer_name, data.Engineer_ID, data.Engineer_email, data.github);
        roster.push(engineer);
    })
    fillRoster();
}

function createIntern() {
    console.log("Enter the intern's information:");
    inquirer.prompt(internQuestions).then(data => {
        console.log(data);
        const intern = new Intern(data.Intern_name, data.Intern_ID, data.Intern_email, data.school);
        roster.push(intern);
    })
    fillRoster();
}

function createEmployee() {
    console.log("Enter the employee's information:");
    inquirer.prompt(employeeQuestions).then(data => {
        console.log(data);
        const employee = new Employee(data.Employee_name, data.Employee_ID, data.Employee_email);
        roster.push(employee);
    })
    fillRoster();
}

function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log('File created successfully!');
    });
}

init();