// // Set Interval
// var count = 0;
// var interval;
// function time() {
//     count++;
//     console.log(count);
// }

// interval = setInterval(time, 1000)

// setTimeout(function(){
//     // for stopping setinterval we use clear interval in set time out
//     clearInterval(interval);
// }, 5000)



// // Stop Watch
// var min = 0;
// var sec=  0 ;
// var msec = 0;

// var minh = document.getElementById('min');
// var sech = document.getElementById('sec');
// var msech = document.getElementById('msec');

// var interval;

// function timer() {
//     msec++;
//    msech.innerHTML = msec;
//    if (msec >= 100) {
//        sec++;
//        sech.innerHTML= sec;
//        msec = 0;
//        if (sec >= 60 ) {
//            min++;
//            minh.innerHTML = min;
//            sec = 0;
//        }
//    }
// }

// function start(){
// interval = setInterval(timer, 10);
//  var startBtn = document.getElementById("start");
//  startBtn.disabled = true ;
// }

// function stops() {
//     clearInterval(interval);
//     var startBtn = document.getElementById("start");
//     startBtn.disabled = false ;
// }

// function reset() {
//     msech.innerHTML = 0;
//     sech.innerHTML = 0;
//     minh.innerHTML = 0;

// }



// Dom Document Object Model
// Target Document == Html == Body
// console.log(document.childNodes[1].childNodes[2]);

// Target Childs
var a = document.getElementById('parent');
// console.log(a.childNodes[0]);
// console.log(a.firstChild);
// console.log(a.lastChild);



var b = document.getElementById('first');
// console.log(b.parentNode);
// console.log(b.nodeType);
// console.log(b.nodeName);
// console.log(b.nodeValue);
// console.log(b.nextSibling);
