const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        var gitUser = this.github;
        return `https://github.com/${gitUser}/`;
    }
}

module.exports = Engineer;