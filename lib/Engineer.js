// pull up class to define class.
const Employee = require("./Employee");
// Using inheritance class from Employee for Manager class
class Engineer extends Employee {
    // adding objects to Manager class
    constructor(name, id, email, github) {
        // enter the inheritance objects
        super(name, id, email)
        // add github to this new class
        this.github = github
    }
    // override same method for different class.
    getRole() {
        return 'Engineer'
    }
    // add new method
    getGithub() {
        return this.github;
    }
}
// export the module to make it work
module.exports = Engineer;