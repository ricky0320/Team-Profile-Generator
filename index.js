const { ENGINE_METHOD_RAND } = require('constants');
const fs = require('fs');
const inquirer = require('inquirer');

// adding class
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// create promptUser function
const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'addMember',
            message:'Would you like to add a team member?'

        }
    ])
}



const Ricky = new Engineer
Ricky.name = 'Ricky'
Ricky.id = '1'
Ricky.email = '1@gmail.com'
Ricky.github = '1git@gmail.com'
console.log(Ricky.getName())
console.log(Ricky.getId())
console.log(Ricky.getEmail())
console.log(Ricky.getGithub())

// const Peter = new Employee
// Peter.name = 'Peter'
// Peter.id = '123'
// Peter.email = '123@gmail.com'

// const Amy = new Employee ('Amy', '456', '456@gmail.com' );

// console.log(Peter.getName());
// console.log(Peter.getEmail());

// console.log(Amy.getName());
// console.log(Amy.getEmail());