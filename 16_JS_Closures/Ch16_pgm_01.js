function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); 
    }

    return innerFunction; 
}

const closureFunction = outerFunction();
closureFunction(); 
function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction1() {
        console.log('Inner Function 1:', outerVariable);
    }

    function innerFunction2() {
        console.log('Inner Function 2:', outerVariable);
    }

    function innerFunction3() {
        console.log('Inner Function 3:', outerVariable);
    }

    return {
        func1: innerFunction1,
        func2: innerFunction2,
        func3: innerFunction3
    };
}

const closureFunctions = outerFunction();
closureFunctions.func1(); 
closureFunctions.func2();
closureFunctions.func3(); 
function personAccount() {
    // Private variables
    let firstname = 'John';
    let lastname = 'Doe';
    let incomes = new Map();
    let expenses = new Map(); 

    // Inner functions
    function totalIncome() {
        let sum = 0;
        incomes.forEach(amount => sum += amount);
        return sum;
    }

    function totalExpense() {
        let sum = 0;
        expenses.forEach(amount => sum += amount);
        return sum;
    }

    function accountInfo() {
        return `Account Info:\nName: ${firstname} ${lastname}\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}\n`;
    }

    function addIncome(description, amount) {
        if (amount > 0) {
            incomes.set(description, amount);
        } else {
            console.log('Amount should be positive');
        }
    }

    function addExpense(description, amount) {
        if (amount > 0) {
            expenses.set(description, amount);
        } else {
            console.log('Amount should be positive');
        }
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        addIncome,
        addExpense,
        accountInfo,
        accountBalance
    };
}

const myAccount = personAccount();
myAccount.addIncome('Salary', 5000);
myAccount.addExpense('Rent', 1200);
myAccount.addExpense('Utilities', 300);

console.log(myAccount.accountInfo());
console.log('Account Balance:', myAccount.accountBalance()); 
