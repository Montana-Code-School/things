var things = require('./things');

describe('Thing', function() {
  var bob = new things.Thing("Bob");
  var jane = new things.Thing("Jane");
  var food = new things.Food("Hamburger", 2);

  it('Make a thing called Bob', function() {
    expect(bob.getName()).toEqual('Bob');
  });

  it('Make a thing called Jane', function() {
    expect(jane.getName()).toEqual('Jane');
  });

  it('Make a Food called Hamburger', function() {
    expect(food.eat(9)).toEqual(11); // adds health
  });

  it('What is name of this food?', function() {
    expect(food.getName()).toEqual("Hamburger");
  })

  it('Try to eat Bob', function() {
    expect(bob.eat === undefined).toBe(true);
  });

  it('Hamburger is a food', function() {
    expect(food instanceof things.Food).toBe(true);
  });

  it('Hamburger is a food', function() {
    expect(food instanceof things.Thing).toBe(true);
  });
});
