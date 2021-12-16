// // TO DO LIST

// var text = document.getElementById("inpVal");
// var list = document.getElementById("list");

// function task() {
//     var textNode = document.createTextNode(text.value);
//     var li = document.createElement("li");
//     var liAttr = li.setAttribute("id", "lis")
//     var data = li.appendChild(textNode);
//     list.appendChild(li);

//     // Edit
//     var edit = document.createElement('button');
//     var editAttr = edit.setAttribute("onClick", "edit()");
//     var btnText = document.createTextNode("Edit Task");
//     edit.appendChild(btnText)
//     li.appendChild(edit);


//     //Delete
//     var del = document.createElement("button");
//     var delAttr = del.setAttribute("onClick", "deletes()");
//     var delText = document.createTextNode("Delete Task");
//     del.appendChild(delText);
//     li.appendChild(del);

//     text.value = ""
// }


// function deleteAll() {
//   list.innerHTML = ""
// }



// function deletes() {
//     document.getElementById("lis").remove();
// }


// function edit() {
//     var liId = document.getElementById("lis");
//     var editText = prompt("Enter The Value Updated Value");
//     liId.firstChild.nodeValue = editText;

// }




// // Objects

// var web = {
//     t1: "taha",
//     t2: "shah",
//     t3: "ali"
// }

// // New Value
// web.t4 = "ahmed";

// // Add array in obj
// web.t5 = ["mine", 5];

// // Giving Undefined value
// web.t5 = undefined;


// // Empty object

// var empObj = {};


// // Check Value
// var abc = "t4" in web;
// console.log(abc) 



// // Object in Array and Object in Object

// var myQues = [
//     {
//         question: "whats Name",
//         anwer: {
//             a : "ali",
//             b: "usman",
//             c: "haris"
//         }, 
        correctAns : "c"
//     }
// ]


// Methods
// var arr = {
//     hello: function why() {
//         alert("HELLO WORLD");
//     },
//     work: "day"
// }



// Construtctor
function Course(t1,t2,t3) {
    this.t1 = t1,
    this.a = t2,
    this.t3 = t3
}

var xyz = new Course("a","b","c");
console.log(xyz)


















