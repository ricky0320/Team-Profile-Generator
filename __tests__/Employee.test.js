const { TestWatcher } = require('@jest/core')
const Employee = require('../lib/Employee')

test('test employee name',() => {
    //create new employee for test
    const Ben = new Employee('Ben')
    expect(Ben.getName()).toBe('Ben');
})

test('test employee id',() => {
    //create new employee for test
    const Ben = new Employee('123')
    expect(Ben.getId()).toEqual('123');
})

test('test employee email',() => {
    //create new employee for test
    const Ben = new Employee('ben@gmail.com')
    expect(Ben.getEmail()).toEqual('ben@gmail.com');
})

test('test employee role',() => {
    //create new employee for test
    const role = new Employee('Employee')
    expect(role.getRole()).toBe('Employee');
})