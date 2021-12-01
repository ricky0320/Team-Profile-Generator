const { TestWatcher } = require('@jest/core')
const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('getName', () => {
        test('this should return an employee name', () => {
            const str = 'ben';
            const result = new Employee(str, '123', 'ben@email').getName()
            expect(result).toEqual(str);
        })
    })

    describe('getId', () => {
        test('this should return an employee id', () => {
            const str = '123';
            const result = new Employee('ben', str, 'ben@email').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'ben@email';
            const result = new Employee('ben', '123', str).getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("this should return the role of the employee", () => {
            const role = "Employee";
            const result = new Employee('ben', '123', 'ben@').getRole();
            expect(result).toEqual(role);
        });
    });
});