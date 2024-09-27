
const Person = require('./person');
const Employee = require('./employee');




const person1 = new Person('Alice', 30);


const employee1 = new Employee('Bob', 25, 'Software Engineer');


person1.introduce();  
employee1.introduce(); 


employee1.work();      
