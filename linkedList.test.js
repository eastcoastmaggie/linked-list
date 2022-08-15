 const linkedList = require('./linkedList');

test('print linked list with one node Appended',() => {
    let  list = linkedList();
    list.append('testing');
    expect(list.toString()).toBe('( testing )');
});
test('print linked list with multiple node Appended',() => {
    let  list = linkedList();
    list.append('testing');
    list.append(2);
    expect(list.toString()).toBe("( testing ) -> ( 2 )");
});
test('print linked list with multiple node prepended',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.prepend(2);
    expect(list.toString()).toBe("( 2 ) -> ( testing )");
});
test('size linked list with multiple nodes',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.prepend(8);
    list.append('time');
    expect(list.size).toBe(3);
});
test('head of linked list with multiple nodes',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.prepend(8);
    list.append('time');
    expect(list.head.value).toBe(8);
});
test('tail of linked list with multiple nodes',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.prepend(8);
    list.append('time');
    expect(list.tail.value).toBe('time');
});
test('at(index) of linked list with multiple nodes',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.prepend(8);
    list.append('time');
    list.prepend('one');
    list.prepend('zero');
    list.append('five');
    expect(list.at(1).value).toBe('one');
});
test('pop() of linked list with multiple nodes',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.prepend(8);
    list.append('time');
    list.prepend('one');
    list.prepend('zero');
    list.append('five');
    expect(list.pop().value).toBe('five');
});
test('contains() of linked list with multiple nodes true',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.prepend(8);
    list.append('time');
    list.prepend('one');
    list.prepend('zero');
    list.append('five');
    expect(list.contains('time')).toBe(true);
});
test('contains() of linked list with multiple nodes false',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.prepend(8);
    list.append('time');
    list.prepend('one');
    list.prepend('zero');
    list.append('five');
    expect(list.contains('pizza')).toBe(false);
});
test('find() of linked list with multiple nodes',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.prepend(8);
    list.append('time');
    list.prepend('one');
    list.prepend('zero');
    list.append('five');
    expect(list.find('testing')).toBe(3);
});
test('find() of linked list with multiple nodes, not in',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.prepend(8);
    list.append('time');
    list.prepend('one');
    list.prepend('zero');
    list.append('five');
    expect(list.find('pizza')).toBe(-1);
});
test('insearAt(value, index) of linked list with multiple nodes',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.append(4);
    list.prepend('one');
    list.prepend('zero');
    console.log(list.toString())
    expect(list.insertAt('pizza', 3).toString()).toBe('( zero ) -> ( one ) -> ( testing ) -> ( pizza ) -> ( 4 )');
});
test('removeAt(index) of linked list with multiple nodes',() => {
    let  list = linkedList();
    list.prepend('testing');
    list.append(4);
    list.prepend('one');
    list.prepend('zero');
    console.log(list.toString())
    expect(list.removeAt(3).toString()).toBe('( zero ) -> ( one ) -> ( testing )');
});