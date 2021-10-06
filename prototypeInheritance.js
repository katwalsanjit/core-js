const Person = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;

  // if(firstName == 'Gorakh'){
//   console.log('hi')
// }

// console.log('This is regular function call');
// this.calcage = function() {
//   console.log('Age calculated');
// }

}




const achiever = new Person('achiever', 'Groups');
const achieverNew = new Person("santosh", 'Nepal');

console.log(Person.prototype);
// console.log(achiever);


Person.prototype.calcage = function(){
  console.log(2021 - 1991);
}

 console.log(achiever.__proto__ === Person.prototype);
 console.log(typeof Person.prototype); //object
 achiever.calcage();