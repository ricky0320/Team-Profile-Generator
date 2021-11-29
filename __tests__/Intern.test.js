const { TestWatcher } = require('@jest/core')
const Intern = require('../lib/Intern')

test('test intern name',() => {
    //create new intern for test
    const Ben = new Intern('Ben')
    expect(Ben.getName()).toBe('Ben');
})

test('test intern id',() => {
    //create new intern for test
    const Ben = new Intern('123');
    expect(Ben.getId()).toEqual('123');
})

test('test intern email',() => {
    //create new intern for test
    const Ben = new Intern('ben@gmail.com')
    expect(Ben.getEmail()).toEqual('ben@gmail.com');
})

test('test intern role',() => {
    //create new intern for test
    const role = new Intern('intern')
    expect(role.getRole()).toBe('intern');
})

test('test intern school name',() => {
    //create new intern for test
    const school = new Intern('UCR')
    expect(school.getSchool()).toBe('UCR');
})