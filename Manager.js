const employee = require('./Employee.js');

class Manager {
    constructor(employee, officeNumber) {
        this.employee = employee
        this.employee.role = 'Manager';
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;