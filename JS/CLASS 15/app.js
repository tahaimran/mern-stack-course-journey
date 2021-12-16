// // WHile Loop
// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

// Do While loop
// let i = 0;
// do {
//     console.log(i);
//     i++
// }while(i < 10);


// // Events
// // Onclick
// function foo() {
//     var text = document.getElementById('text');
//     text.value = "texras";

// }

// function imgs() {
//     var img = document.getElementsByTagName('img');
//     alert("This Img")
// }

// // ASCI CODE
// var a = "a";
// var b = a.charCodeAt();
// console.log(b)



// Calculator

function getNum(e) {
  var res = document.getElementById("result");
  res.value += e;
}

function reset() {
  var res = document.getElementById("result");
  res.value = "";
}


function result() {
  var res = document.getElementById("result");

  for (var i = 0; i < res.value.length; i++) {
    if ( res.value.slice(i, i + 2) == "++" ||  res.value.slice(i, i + 2) == "--" || res.value.slice(i, i + 2) == "**" ||  res.value.slice(i, i + 2) == "//" ) {
      res.value = "Errors";
    }
  }
  res.value = eval(res.value);

}