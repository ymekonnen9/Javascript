class BankAccount{
    #balance = 0;

    #checkBalance(){
        return this.#balance;
    }

    get balance(){
        return this.#balance;
    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        if(amount <= this.#checkBalance()){
            this.#balance-= amount;
        }else{
            throw new RangeError("Insufficient funds");
        }
        return amount;
    }
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
console.log(account.balance);
account.withdraw(100);