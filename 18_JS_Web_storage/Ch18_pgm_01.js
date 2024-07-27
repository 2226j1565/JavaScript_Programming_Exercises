// Storing personal information in localStorage
const personalInfo = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  country: 'USA',
  city: 'New York'
};

localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
const storedPersonalInfo = JSON.parse(localStorage.getItem('personalInfo'));
console.log(storedPersonalInfo);
const student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 22,
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  country: 'Canada',
  enrolled: true
};
localStorage.setItem('student', JSON.stringify(student));
const storedStudent = JSON.parse(localStorage.getItem('student'));
console.log(storedStudent);
const personAccount = {
  firstName: 'Jane',
  lastName: 'Doe',
  incomes: [
    { description: 'Salary', amount: 5000 },
    { description: 'Freelance', amount: 1200 }
  ],
  expenses: [
    { description: 'Rent', amount: 1500 },
    { description: 'Utilities', amount: 300 },
    { description: 'Groceries', amount: 200 }
  ],

  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },

  totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },

  accountInfo() {
    return `${this.firstName} ${this.lastName} has a total income of $${this.totalIncome()} and total expenses of $${this.totalExpense()}.`;
  },

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
};
console.log(personAccount.accountInfo());
personAccount.addIncome('Bonus', 500);
personAccount.addExpense('Internet', 60);
console.log(personAccount.accountInfo());
console.log('Account Balance: $' + personAccount.accountBalance());
