const employee = require('./Employee.js');

class Intern {
    constructor(employee, school) {
        this.employee = employee
        this.employee.role = 'Intern';
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;