// // Function Prototypes

// function Student(name, roll) {
//   this.name = name;
//   this.roll = roll;
// //   this.getName = function() {
// //       return this.Name
// //   }
// }

// // Creating Object through passing data
// var student1 = new Student ("taha",27);

// // THe issue is it will create function again and again function would be same
// // For This Reason we will use prototye
// // It will create a copy of that function or even a property or other


// Student.prototype.getName = function() {
//     return this.name;
// }
// // Now we dont need function which is return above
// // console.log(student1.getName())


// var student2 = new Student ("Shah",67);



// Checking Properties in obj

// console.log("name" in student1);
// Another Method
// console.log(student1.hasOwnProperty("roll"));

// // For all properties
// for (var abc in student1) {
//     console.log(abc)
// }
// for checking keys
// for(var efg in student1) {
//     console.log(student1[efg])
// }

















