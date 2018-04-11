//Constructors & Methods 

function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}

Dog.prototype.bark = function bark() {
  return 'Woof!';
}

class ReturnName{

  constructor(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
  }
  
  getFullName(){
    return !this.firstName ? this.lastName : !this.lastName ? this.firstName : this.firstName+" "+this.lastName;
  }
  
}

// Spread

function spread(func, args) {
  return func.apply(this, args);
}

// Create String Method

String.prototype.isUpperCase = function isUpperCase(){
  return this.slice() === this.slice().toUpperCase() ? true: false;
};
