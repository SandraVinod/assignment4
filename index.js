//1st QUESTION//
let isprime = document.getElementById("isprime");
let array1 = [];
let arraytoprime = document.getElementById("arraytoprime");
function primeornot() {
    array1 = arraytoprime.value.split` `;
    let num = Number(array1[0]);
    if (isPrime(num) == true) {
        isprime.innerHTML = "The First Element of the array, " + array1[0] + " is Prime";
    }
    else {
        isprime.innerHTML = "The First Element of the array, " + array1[0] + " is Not a Prime";
    }
}
function isPrime(num) {
    
    if (num === 1) { return false; }
    if (num === 2) { return true; }
    else if (num > 2) {
        for (var i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}
//2nd QUESTION//
let arraytofreqitem = document.getElementById("arraytofreqitem");
let frequentitemdisplay = document.getElementById("frequentitemdisplay");
function frequentitem() {
    array2 = arraytofreqitem.value.split` `;
    console.log(array2);
    let mostfrequent = 1;
    let repeatnum = 0;
    let frequentitem = [];
    console.log("freq" + frequentitem);

    for (let i = 0; i < array2.length; i++) {
        for (let j = i; j < array2.length; j++) {
            if (array2[i] == array2[j]) repeatnum++;
        }
        if (mostfrequent < repeatnum) {
            mostfrequent = repeatnum;
            frequentitem = [];
            frequentitem.push(array2[i]);
        }
        else if (mostfrequent == repeatnum) {
            frequentitem.push(array2[i]);
        }
        repeatnum = 0;
    }
    let output = "Most frequent item(s): <strong>"
    let x;
    for (x of frequentitem) {
        output += x + " ";
    }
    output += "</strong>. Which repeat <strong>" + mostfrequent + "</strong> times";
    frequentitemdisplay.innerHTML = output;}
   
//3rd QUESTION//
let stringtoswap = document.getElementById("stringtoswap");
let swapstringdisplay = document.getElementById("swapstringdisplay");
function swapstring() {
    let string = stringtoswap.value;
           let newstring = "";
    for (i = 0; i < string.length; i++) {
        newstring += (string[i] === string[i].toLowerCase()) ? string[i].toUpperCase() : string[i].toLowerCase();
    }
    swapstringdisplay.innerHTML = "The swapped string is <strong>" + newstring + "</strong";
}
//4th QUESTION//
let arraytosqare = document.getElementById("arraytosqare");
let sumofsqaresdisplay = document.getElementById("sumofsqaresdisplay");
function sumofsqares() {
    let arrayvalue = arraytosqare.value;
    let result = Math.hypot(...arrayvalue.split` `) ** 2;
        
    sumofsqaresdisplay.innerHTML = result;
}
//5th QUESTION//
let oddorevendisplay = document.getElementById("oddorevendisplay");
function oddoreven() {
    oddorevendisplay.innerHTML = "<br>Zero may come under both odd an even as some people argue but more preferably even.<br><ul>"
    for (i = 0; i <= 15; i++) {
        let ans = (i % 2 == 0) ? "Even" : "Odd";
        oddorevendisplay.innerHTML += "<li>" + i + " is " + ans + "</li>";
    }
    oddorevendisplay.innerHTML += "</ul>";
}
//6th QUESTION//
let stringtotruncate = document.getElementById("stringtotruncate");
let truncatenumber = document.getElementById("truncatenumber");
let truncatestringdisplay = document.getElementById("truncatestringdisplay");
function truncatestring() {
    let stringtrunc = stringtotruncate.value;
    let numtrunc = truncatenumber.value;
    truncatestringdisplay.innerHTML = "The truncated string is: " + stringtrunc.substring(0, numtrunc);
}
//7th QUESTION//
let firstnumber = document.getElementById("firstnumber");
let secondnumber = document.getElementById("secondnumber");
let largernumberdisplay = document.getElementById("largernumberdisplay");
function findLarge() {
    let fnum=firstnumber.value;
    let snum = secondnumber.value;
    let oplarge="";
    if(fnum==snum){oplarge="Both Numbers are same";}
    else{
        oplarge="The larger number is: <strong>"+(fnum>snum)?fnum:snum+"</strong";
    }
    largernumberdisplay.innerHTML = oplarge;
}
