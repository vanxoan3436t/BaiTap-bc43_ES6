class Person {
    code = '';
    name = '';
    email = '';
    password = '';
    address = '';
}

export class Student extends Person {
    math = '';
    physics = '';
    chemistry = '';

    calculatorAverage() {
        let average = (Number(this.math) + Number(this.physics) + Number(this.chemistry)) / 3;
        return average.toFixed(1);
    }
   
}

export class Employee extends Person {
    workday = '';
    daymoney = '';

    calulatorMoney() {
        // let money = Number(this.workday) * Number(this.daymoney) ;
        let money = Number(this.workday) * Number(this.daymoney);
        return money.toLocaleString();
    }
}

export class Customer extends Person {
    nameCompany = '';
    bill = '';
    evalute = '';

}