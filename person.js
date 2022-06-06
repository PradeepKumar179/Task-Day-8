class Person {
    constructor (firstname,lastname,age,contact,address,maritalStatus)
    {
        this.fName = firstname;
        this.lName = lastname;
        this.Age = age;
        this.Contact = contact;
        this.Address = address;
        this.Marital_Status = maritalStatus;
    }
    getDetails(){
        return `First Name:${this.fName}
        Second Name:${this.lName}
        Age: ${this.Age}
        Contact: ${this.Contact}
        Address: ${this.Address}
        Martial Status: ${this.Marital_Status}`
    }

};
const Pradeep = new Person ("Pradeep","Kumar",26,7894521235,"45,wqea,asdasd","Single");
console.log(Pradeep.getDetails());