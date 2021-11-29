const { TestWatcher } = require('@jest/core')
const Manager = require('../lib/Manager')

test('test Manager name',() => {
    //create new Manager for test
    const Ben = new Manager('Ben')
    expect(Ben.getName()).toBe('Ben');
})

test('test Manager id',() => {
    //create new Manager for test
    const Ben = new Manager('123')
    expect(Ben.getId()).toBe('123');
})

test('test Manager email',() => {
    //create new Manager for test
    const Ben = new Manager('ben@gmail.com')
    expect(Ben.getEmail()).toBe('ben@gmail.com');
})

test('test Manager role',() => {
    //create new Manager for test
    const role = new Manager('Manager')
    expect(role.getRole()).toBe('Manager');
})

test('test Manager number',() => {
    //create new Manager for test
    const num = new Manager('123-456-7890')
    expect(num.getOfficeNumber()).toBe('123-456-7890');
})