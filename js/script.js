
// Alert that asks user for his name.
var n1 = window.prompt("Please type your name before we go on:");
if (n1==null) {n1 = "User"}
document.getElementById("name").innerHTML = ("Hi ")+n1+"!";
document.getElementById("name2").innerHTML= n1 +"!";

// Function for changing Background color.
function bgChange (bg) {
document.body.style.background = bg;

}