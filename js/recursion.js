let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

const sumSalary = (department) => {
  if (Array.isArray(department)) {
    return department.reduce((acc, curr) => curr.salary + acc, 0);
  } else {
    let sum = 0;
    for (let sub of Object.values(department)) {
      sum += sumSalary(sub);
    }
    return sum;
  }
};

console.log(sumSalary(company));
