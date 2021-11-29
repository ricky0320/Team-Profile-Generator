// pull up class to define class.
const Employee = require("./Employee");
// Using inheritance class from Employee for Manager class
class Manager extends Employee {
    // adding objects to Manager class
    constructor(name, id, email, officeNumber) {
        // enter the inheritance objects
        super(name, id, email)
        // add another object specific to this new class
        this.officeNumber = officeNumber
    }
    // override same method for different class.
    getRole() {
        return 'Manager'
    }
    // add new method
    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;