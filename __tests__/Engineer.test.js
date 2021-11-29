const { TestWatcher } = require('@jest/core');
const Engineer = require('../lib/Engineer');

test('test Engineer', () => {
    //create new employee for test
    const Ben = new Engineer('Ben')
    expect(Ben.getName()).toBe('Ben');
})