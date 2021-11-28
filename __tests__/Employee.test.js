const { TestWatcher } = require('@jest/core')
const Employee = require('../lib/Employee')

test('test employee class name',() => {
    //create new employee for test
    const Ben = new Employee('Ben')
    expect(Ben.getName()).toBe('Ben');
})