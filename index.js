// Setting required files
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generateHTML = require('./utils/generateHTML');
const generateCard = require('./utils/generateCard');

// Creating arrays to be used later
const roster = [];
const cards = [];

// Array of questions to be asked for Manager
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

// Array of questions to be asked for Engineer
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

// Array of questions to be asked for Intern
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


// Function to get program rolling
function init() {
    createManager();
}

// Function to prompt for additional team members
function fillRoster() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'answer',
            message: 'Would you like to add more team members?',
            choices: ['Engineer', 'Intern', 'No more members'],
        },
    ]).then(userInput => {
        switch(userInput.answer) {
            case 'Engineer':
                createEngineer();
                break;
            case 'Intern':
                createIntern();
                break;
            default:
                for(var i=0; i<roster.length; i++) {
                    cards.push(generateCard(roster[i]));
                };
                writeToFile('index.html', generateHTML(cards.join('')));
        }
    });
}

// Function to create Manager from inputs
function createManager() {
    console.log("Enter the manager's information:");
    inquirer.prompt(managerQuestions).then(data => {
        console.log(data);
        const manager = new Manager(data.Manager_name, data.Manager_ID, data.Manager_email, data.Manager_office);
        roster.push(manager);
    }).then(placeholder => {
        fillRoster();
    });
}

// Function to create Engineer from inputs
function createEngineer() {
    console.log("Enter the engineer's information:");
    inquirer.prompt(engineerQuestions).then(data => {
        console.log(data);
        const engineer = new Engineer(data.Engineer_name, data.Engineer_ID, data.Engineer_email, data.github);
        roster.push(engineer);
    }).then(placeholder => {
        fillRoster();
    });
}

// Function to create Intern from inputs
function createIntern() {
    console.log("Enter the intern's information:");
    inquirer.prompt(internQuestions).then(data => {
        console.log(data);
        const intern = new Intern(data.Intern_name, data.Intern_ID, data.Intern_email, data.school);
        roster.push(intern);
    }).then(placeholder => {
        fillRoster();
    })
}

// Function to create the index.html file and copy the style.css file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if(err) {
            return console.log(err);
        }
        console.log('File created successfully!');
    });
    fs.copyFile('./src/style.css','./dist/style.css', (err) => {
        if(err) {
            return console.log(err);
        }
        console.log('Stylesheet successfully created!');
    })
}

// Initializing the program
init();