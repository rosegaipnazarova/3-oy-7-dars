//n1

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return `Salom, mening ismim ${this.name} va yoshim ${this.age}da`
    }
}
const shaxs = new Person("rose", 21)
console.log(shaxs.greet())