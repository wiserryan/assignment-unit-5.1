console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Ryan',
  lastName : 'Wiser',
  hasSiblings: true,
  shoeCount: 8,
  favThreeFoods: ['Pizza', 'Burritos', 'Ice cream'],

  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + " " + me.lastName;
console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[2]);

//console.log(me.)
/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(me.shoeCount);
me.shoeCount += 1;
console.log(me.shoeCount);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'blue';
console.log(me);


//Objects video instructions
// when you see () with {} you are generally seeing a function, conditional or loop
//             0        1         2
//let colors = ['teal', 'orange', 'yellow']; // arrays use square brackets, access by numeric value
//let firstColor = colors[0]; //access the first color
//let lastColorRemoved = colors.pop(); //remove last color

// 35:19 portion of the Objects lecture video
//Objects us curly brackets
//let repository = {  // this created an object, access properties by property name (key)

//};

//console.log(repository.title);
//console.log(repository['title']);