function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }

    return innerFunction;
}

const innerFunc = outerFunction();

console.log(innerFunc()); // 1
console.log(innerFunc()); // 2
console.log(innerFunc()); // 3
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++;
        return count;
    }
    function minusOne() {
        count--;
        return count;
    }

    return {
        plusOne: plusOne,
        minusOne: minusOne
    };
}

const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne()); // 1
console.log(innerFuncs.plusOne()); // 2
console.log(innerFuncs.minusOne()); // 1
console.log(innerFuncs.minusOne()); // 0

function BankAccount(initialBalance) {
    let balance = initialBalance;

    function deposit(amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    function withdraw(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }

    function getBalance() {
        return balance;
    }

    return {
        deposit,
        withdraw,
        getBalance
    };
}

const account = BankAccount(100);

console.log(account.getBalance()); 
account.deposit(50);
console.log(account.getBalance()); 
account.withdraw(30);
console.log(account.getBalance()); 

