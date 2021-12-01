const { TestWatcher } = require('@jest/core')
const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('getName', () => {
        test('this should return an Manager name', () => {
            const str = 'ben';
            const result = new Manager(str, '123', 'ben@email', '4155259106').getName()
            expect(result).toBe(str);
        })
    })

    describe('getId', () => {
        test('this should return a Manager id', () => {
            const str = '123';
            const result = new Manager('ben', str, 'ben@email', '4155259106').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'ben@email';
            const result = new Manager('ben', '123', str, '4155259106').getEmail();
            expect(result).toEqual(str);
        })
    })

    describe('getRole', () => {
        test('this should return the role of the Manager', () => {
            const role = "Manager";
            const result = new Manager('ben', '123', 'ben@email', '4155259106').getRole();
            expect(result).toEqual(role);
        });
    });

    describe('getOfficeNumber', () => {
        test('this should return the office number', () => {
            const str = '4155259106';
            const result = new Manager('ben', '123', 'ben@email', str).getOfficeNumber();
            expect(result).toEqual(str);
        });
    });
});