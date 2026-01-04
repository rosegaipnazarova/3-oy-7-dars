//n1

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     greet() {
//         return `Salom, mening ismim ${this.name} va yoshim ${this.age}da`
//     }
// }
// const shaxs = new Person("rose", 21)
// console.log(shaxs.greet());

//n2

// class BankAccount {
//     constructor(balance = 0) {
//         this.balance = balance
//     }

//     deposit(amount) {
//         this.balance += amount;
//         return `balans: ${this.balance}`
//     }

//     withdraw(amount) {
//         if (amount > this.balance) {
//             return "Mablag' yetarli emas!"
//         } else {
//             this.balance -= amount
//             return `qoldi: ${this.balance}`
//         }
//     }
// }

// const myacc = new BankAccount(1000)
// console.log(myacc.deposit(200));    
// console.log(myacc.withdraw(300));   

//n3