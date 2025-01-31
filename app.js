/*
function createInstructor(firstName, lastName) {
    return{
        firstName: firstName,
        lastName: lastName
    }
}


*/

/*
function createInstructor(firstName, lastName) --> function name with two arguments
{
  return {
    firstName,//return first argument in parameter
    lastName,//return last argument in parameter
  };
}



*/

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

/*

var favoriteNumber = 42;
var instructor = {
    firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"

*/

/*
Consolidating code which shorthand allows you to put instructor[favoriteNumber] = "That is my favorite!"
into the instructor variable 


var favoriteNumber = 42// variable 

var instructor = {
    firstName: 'colt'// object literal where property is firstName: and Colt is the key

    [favoriteNumber]: "That is my favorite!"// setting 42 property to the string that is a key
    
}

*/

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt", //property: key
  //42: favorite number

  [favoriteNumber]: "That is my favorite!",
};

/*

var instructor = {
    firstName: "colt",
    sayHi: function(){
        return "Hi!"
    },
    sayBye: function(){
        return this.firstName + "says bye!";
    }
}

*/

/*

var instructor = {
  firstName: "Colt",
  sayHi: "Hi",
  sayBye: [firstName] + "says bye!",
};

unCaught referenceError: firstName because it is not a function nor defined
you have to pass thru information 


insteead of sayHi: "Hi" --> sayHi() {
    return "Hi";
}

instead of adding that it is a function, the function key word is dropped as Javascript can read that 
a function is applied to the code
*/

/*
var instructor = {
  firstName: "Colt",
  sayHi() --> empty parents are telling JS to pass thru information if returned which we return "Hi!"
  
  {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says Bye!"; --> return this object and add or concatinate this string thru sayBye empty parenthasis
  },
};


*/

var instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says Bye!";
  },
};
/*

createAnumal function 
write a function which generates an animal object. The function should accept 3 arguments:
- specieis: the specieis of animal ('cat', 'dog')
- verb: a string used to name a function ("bark", "bleet")
- noise: a string to be printed when above function is called ('woof', 'baa')


const d = createAnimal("dog", "bark", "Woooof!")
d.bark()


const s = createAnimal("sheep", "bleet", "BAAAAaaaaaa")
s.bleet


*/

//createAnimal is the variable that will be the object in this function

const d = createAnimal("dog", "bark", "Woooof!");
d.bark();

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
