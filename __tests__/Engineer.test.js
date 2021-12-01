const { TestWatcher } = require('@jest/core');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        test('Test Engineer name', () => {
            const str = 'Ben';
            const result = new Engineer(str, '123', 'ben@email', 'ben@github').getName()
            expect(result).toEqual(str);
        })
    })

    describe('getId', () => {
        test('this should return an Engineer id', () => {
            const str = '123';
            const result = new Engineer('ben', str, 'ben@email', 'ben@github').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'ben@email';
            const result = new Engineer('ben', '123', str, 'ben@github').getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("this should return the role of the Engineer", () => {
            const role = "Engineer";
            const result = new Engineer('ben', '123', 'ben@email', 'ben@github').getRole();
            expect(result).toEqual(role);
        });
    });

    describe("gitHub", () => {
        test("this should return the github account of the Engineer", () => {
            const str = 'ben@github';
            const result = new Engineer('ben', '123', 'ben@email', str).getGithub();
            expect(result).toEqual(str);
        });
    });
});