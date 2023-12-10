const inquirer = require("inquirer");
const databaseFunctions = require('./assets/js/dataBaseFunctions');
const fs = require("fs").promises;
const path = require("path");

const startApp = () => {
    inquirer
      .prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit'],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View all departments':
            databaseFunctions.viewAllDepartments();
            break;
  
          case 'View all roles':
            databaseFunctions.viewAllRoles();
            break;
  
          case 'View all employees':
            databaseFunctions.viewAllEmployees();
            break;
  
          case 'Add a department':
            inquirer
              .prompt({
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:',
              })
              .then((departmentAnswer) => {
                databaseFunctions.addDepartment(departmentAnswer.departmentName);
              });
            break;
  
          case 'Add a role':
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'roleTitle',
                  message: 'Enter the title of the role:',
                },
                {
                  type: 'input',
                  name: 'roleSalary',
                  message: 'Enter the salary for the role:',
                },
                {
                  type: 'input',
                  name: 'roleDepartment',
                  message: 'Enter the department ID for the role:',
                },
              ])
              .then((roleAnswer) => {
                databaseFunctions.addRole(roleAnswer.roleTitle, roleAnswer.roleSalary, roleAnswer.roleDepartment);
              });
            break;
  
          case 'Add an employee':
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'firstName',
                  message: 'Enter the employees first name:',
                },
                {
                  type: 'input',
                  name: 'lastName',
                  message: 'Enter the employees last name:',
                },
                {
                  type: 'input',
                  name: 'employeeRole',
                  message: 'Enter the role ID for the employee:',
                },
                {
                  type: 'input',
                  name: 'employeeManager',
                  message: 'Enter the manager ID for the employee (optional):',
                },
              ])
              .then((employeeAnswer) => {
                databaseFunctions.addEmployee(employeeAnswer.firstName, employeeAnswer.lastName, employeeAnswer.employeeRole, employeeAnswer.employeeManager);
              });
            break;
  
          case 'Update an employee role':
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'employeeId',
                  message: 'Enter the ID of the employee to update:',
                },
                {
                  type: 'input',
                  name: 'newRoleId',
                  message: 'Enter the new role ID for the employee:',
                },
              ])
              .then((updateAnswer) => {
                databaseFunctions.updateEmployeeRole(updateAnswer.employeeId, updateAnswer.newRoleId);
              });
            break;
  
          case 'Exit':
            console.log('Exiting the application.');
            process.exit(0);
            break;
  
          default:
            console.log('Invalid choice. Please try again.');
            startApp();
            break;
        }
      });
  };
  
  startApp();