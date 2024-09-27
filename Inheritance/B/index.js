
function Person(name, age) {
    this.name = name;  
    this.age = age;    
}


Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};


if (typeof module !== 'undefined') {
    module.exports = Person;
}
