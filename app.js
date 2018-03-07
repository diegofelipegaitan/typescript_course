"use strict";
var bankAccountObject = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself;
myself = {
    name: "Max",
    bankAccount: bankAccountObject,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
