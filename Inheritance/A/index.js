
function Animal() {
    this.type = 'Animal';
  }
  
  
  Animal.prototype.sound = function() {
    console.log('Animal sound');
  };
  
  
  function Dog() {
    Animal.call(this); 
    this.breed = 'Dog'; 
  }
  
  
  Dog.prototype = Object.create(Animal.prototype);
  
  
  Dog.prototype.sound = function() {
    console.log('Bark');
  };
  
  
  const myDog = new Dog();
  
  
  myDog.sound(); 
  