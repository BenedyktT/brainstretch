class Greetings {
  english() {
    return "Hello";
  }
  spanish() {
    return "Hola";
  }
}
class MoreGreetings {
  german() {
    return "Hallo";
  }
  french() {
    return "Bonjour";
  }
}

const greetings = new Greetings();
const moreGreetings = new MoreGreetings();

const allGreetings = new Proxy(moreGreetings, {
  get: function (target, property) {
    return target[property];
  },
});
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  e: 4,
  f: 5,
};

const merge = new Proxy(obj1, {
  get: (target, property) => {
    return target[property] || obj2[property];
  },
  set,
});

console.log(merge.f);

console.log(allGreetings.french());
