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

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt", //property: key
  //42: favorite number

  [favoriteNumber]: "That is my favorite!",
};
