// for (var i = 1; i < 100; i = i + 10) {
//     for (var j = i; j < i + 10; j++) {
//         document.write(j+"\t");
//     }
//     document.write("<br>");

// }



// // Change Text To Upper and Lower Case
// var a = "Hello My name is Taha";
// var aa = a.toLowerCase();
// var bb = a.toUpperCase();

// console.log("LC  " + aa + "\n UC " + bb)


// // Measuring Length and Extracting Parts

// Extracting
// var ent1 = prompt("Enter City");
// var slice1 = ent1.slice(0, 1);
// var slice2 = ent1.slice(1);
// slice1 = slice1.toUpperCase();
// slice2 = slice2.toLowerCase();
// var complete = slice1 + slice2;
// console.log(complete)

// // Measuring
// var text = "Taha Imran";
// var result = text.length;
// console.log(result)


// var texts = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
// // Finding Segments
// var find = texts.indexOf("ipsum");
// // Finding Chararcters
// var charFind = texts.charAt(2);
// // Replacing Old Text
// var repText = texts.replace("ipsum", "YOUTHCLUB");
// console.log()


// MATH
// // Rounding Numbers
// var num = 15.565;
// // if > 5 Result Increase if > 5 decrease 
// var roundNum = Math.round(num);
// // FOr Increasing only
// var ceilNum = Math.ceil(num);
// // FOr Decreasing only
// var floorNum = Math.floor(num);

// console.log(floorNum)

// // Random Number
// var randNum = Math.random();
// // For making it to end multiply statement by 2
// var randNum = Math.random() * 3;
// // Use Floor For removing decimal
// var randFloor = Math.floor(randNum);
// console.log(randFloor);


// // Conversion
// // For String to Int
// // MEthod 1
// var numSi = Number("10");
// console.log(numSi)
// // MEthod 2
// var numSii = parseInt("10");
// console.log(numSii)

// // For Int to string
// var num = 10;
// num = num.toString();
// console.log(num);


// // COntrolling the length of decimal
// var num = 10.573489573483486734897;
// var control = num.toFixed(2);
// console.log(control)



// // Head Tails game
// var head = prompt("Enter Head User Name : ");
// var tails = prompt("Enter Tails User Name : ");

// var tossRand = Math.random() * 2;
// var tossFloor = Math.floor(tossRand);

// if (tossFloor === 0) {
//     alert(head + " Wins The Toss")
// }else {
//     alert(tails + " Wins The Toss")
// }
























