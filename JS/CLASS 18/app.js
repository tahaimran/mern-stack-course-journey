// var p = document.getElementById('weText');

// var head = document.getElementsByClassName("head");

// // Attributes
// // Check
// if (p.hasAttribute('class')) {
//     alert("Found")
// } else {
//     alert("not Found")
// }


// // GEt
// console.log(p.getAttribute('class'));

// // Give
// var bb = p.setAttribute('src' , "https://google.com")
// console.log(p)

// // Checking AMount
// console.log(p.attributes);




function send() {
    var val = document.getElementById("val");


    var p = document.createElement('p');
    var ss = document.createTextNode(val.value);

    p.appendChild(ss);

    var div = document.getElementById("msg");
    div.appendChild(p);
    
  val.value = "" 
}
