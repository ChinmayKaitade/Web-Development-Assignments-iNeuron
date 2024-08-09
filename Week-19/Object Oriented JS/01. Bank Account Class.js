/*01. Create a BankAccount class in JavaScript using Object-Oriented Programming (OOP)
principles. The class should have methods for depositing, withdrawing, and checking 
the account balance. Ensure that account balances cannot go below zero and that both 
deposit and withdrawal amounts must be positive.*/

class BankAccount {
  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited Rs.${amount}. New balance: Rs.${this.balance}`);
    } else {
      console.log("Invalid deposit amount. Please enter a positive amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn Rs.${amount}. New balance: Rs.${this.balance}`);
      } else {
        console.log("Insufficient funds for withdrawal.");
      }
    } else {
      console.log("Invalid withdrawal amount. Please enter a positive amount.");
    }
  }

  checkBalance() {
    console.log(
      `Account balance for ${this.accountHolder}: Rs.${this.balance}`
    );
  }
}

const myAccount = new BankAccount("Mithun S", 1000);

myAccount.checkBalance(); // Account balance for Mithun S: Rs.1000

myAccount.deposit(500); // Deposited Rs.500. New balance: Rs.1500
myAccount.deposit(-50); // Invalid deposit amount. Please enter a positive amount.

myAccount.withdraw(200); // Withdrawn Rs.200. New balance: Rs.1300
myAccount.withdraw(1500); // Insufficient funds for withdrawal.
myAccount.withdraw(-500); // Invalid withdrawal amount. Please enter a positive amount.

myAccount.checkBalance(); // Account balance for Mithun S: Rs.1300
