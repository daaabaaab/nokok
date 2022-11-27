function send()
{
var number1 = document.getElementById("inp1").value;
var number2 = document.getElementById("inp2").value;
var actual_answer=parseInt(number1) * parseInt(number2);
var question_number="<h4>" + number1 + "X" + number2 +"</h4>";
var input_box= "<br>Answer : <input type='text' id='input_check_box'>";
var check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row= question_number + input_box + check_button ;
document.getElementById("output").innerHTML=row;
document.getElementById("inp1").value="";
document.getElementById("inp2").value="";
}