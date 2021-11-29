const { ENGINE_METHOD_RAND } = require('constants');
const fs = require('fs');
const inquirer = require('inquirer');

// adding classes
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


const questions = [{
  type: 'input',
  name: 'name',
  message: 'Please enter your name or the name of the team member: ',
  validate: nameInput => { if (nameInput) { return true; } else { return false; } }
},
{
  type: 'input',
  name: 'id',
  message: 'Please enter your id or the id of the team member: ',
  validate: idInput => { if (idInput) { return true; } else { return false; } }
},
{
  type: 'input',
  name: 'email',
  message: 'Enter the email of the member:',
  validate: emailInput => { if (emailInput) { return true; } else { return false; } }
},
{
  type: 'confirm',
  name: 'confirmMembers',
  message: 'Would you like to add more team members?'
},
];

const membersArray = [];

const addMembers = () =>{ //function adds more employee of engineer or intern
inquirer.prompt([{
      type: 'list',
      name: 'role',
      message: 'Select the role of the team member:',
      choices: ['Engineer', 'Intern'],
  },
  {
      type: 'input',
      name: 'extraInfo',
      message: 'Please enter github username for engineer or enter school name for intern: ',
      validate: extraInput => { if (extraInput) { return true; } else { return false; } }
  }
]).then(({ role, extraInfo }) => { repeat(role, extraInfo); })
}

const repeat = (role, extraInfo) =>{ //repeat prompt the series of questions and create new Employees
inquirer.prompt(questions)
  .then(({ id, name, email, confirmMembers }) => {
      let member;
      if (role === 'manager') { //creating new employees: intern, engineer, manager
          member = new Manager(name, id, email, extraInfo)
      } else if (role === 'Engineer') {
          member = new Engineer(name, id, email, extraInfo)
      } else if (role === 'Intern') { member = new Intern(name, id, email, extraInfo) }
      membersArray.push(member); //push the result onto the array
      if (confirmMembers) { addMembers(); } else { //check to add more member by calling addMember()
          fs.writeFile('./dist/index.html', generateHTML(membersArray), (err) => {
              //wrote to index.html by calling generateHTML file and passing the array
              if (err) { console.log('There was an error', err) } //error
              console.log("Successful."); //success
          });
      }
  })
}

const init = () => { //prompt mananger for office no., call repeat() asking  the series of quesitions
inquirer.prompt([{ //asking for the office number
  type: 'input',
  name: 'extraInfo',
  message: 'Hi manager, please your office phone number: ',
  validate: extraInput => { if (extraInput) { return true; } else { return false; } }
}]).then(({ role, extraInfo }) => {
  role = 'manager'; //set the role to manager, then call repeat function
  repeat(role, extraInfo);
})
}

// call the function init()
init();