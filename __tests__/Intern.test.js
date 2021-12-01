const { TestWatcher } = require('@jest/core')
const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('getName', () => {
        test('this should return an Intern name', () => {
            const str = 'ben';
            const result = new Intern(str, '123', 'ben@email', 'UCB Bootcamp').getName()
            expect(result).toEqual(str);
        })
    })

    describe('getId', () => {
        test('this should return an Intern id', () => {
            const str = '123';
            const result = new Intern('ben', str, 'ben@email', 'UCB Bootcamp').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'ben@email';
            const result = new Intern('ben', '123', str, 'UCB Bootcamp').getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("this should return the role of the Intern", () => {
            const role = "Intern";
            const result = new Intern('ben', '123', 'ben@email', 'UCB Bootcamp').getRole();
            expect(result).toEqual(role);
        });
    });

    describe("gitHub", () => {
        test("this should return the school of the Intern", () => {
            const str = 'UCB Bootcamp';
            const result = new Intern('ben', '123', 'ben@email', str).getSchool();
            expect(result).toEqual(str);
        });
    });
});