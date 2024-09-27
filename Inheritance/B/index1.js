
const Person = require('./person');


function Employee(name, age, jobTitle) {
    Person.call(this, name, age); 
    this.jobTitle = jobTitle;     
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; 

Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};


if (typeof module !== 'undefined') {
    module.exports = Employee;
}
