// Set Timeout

/*
setTimeout(function(){
    console.log("5 saniye sonra çalışacak");
},5000)
*/

let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayı: ", i);
},1000);


// Clear Interval
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);
});
