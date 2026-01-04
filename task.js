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

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    area() { 
        return this.width * this.height
    }
    perimetr() { 
        return 2 * (this.width + this.height)
    }
}

const shakl = new Rectangle(8, 6)
console.log(shakl.area());      
console.log(shakl.perimetr()); 
