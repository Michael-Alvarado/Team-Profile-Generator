const employee = require('./Employee.js');

class Engineer {
    constructor(employee, github) {
        this.employee = employee
        this.employee.role = 'Engineer';
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;