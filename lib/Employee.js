class Employee {
    // construct objects
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
 }
 // create methods
 getName() {
     return this.name;
 }
 getId() {
     return this.id;
 }
 getEmail() {
     return this.email;
 }
 getRole() {
     return 'Employee'
 }
}
// export the module
module.exports = Employee