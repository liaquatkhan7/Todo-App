var fullArr = [];
var val;
var cros = "<img src='1480124680_cancel.png' alt='cancel' width='15px' height='15px'>"
function add(){
    val = document.getElementById("textFiled").value;
    fullArr.push(val);
    document.getElementById("todoHere").innerHTML += "<li>"+ val + cros + "</li>" ;
}



















 