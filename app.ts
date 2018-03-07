type bankAccount = {
    money: number, deposit: (value: number) => void
};

let bankAccountObject: bankAccount = {
    money: 2000,
    deposit: function (value: number) {
        this.money += value
    }
};

let myself: {
    name: string, bankAccount: bankAccount, hobbies: string[]
};

myself = {
    name: "Max",
    bankAccount: bankAccountObject,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
