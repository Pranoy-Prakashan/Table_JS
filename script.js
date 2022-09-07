
var entry=document.getElementById("enter");
entry.addEventListener("click", displayt);

var row=-1;
function displayt()
{
    var named=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var grade=document.getElementById("grade").value;
    if(!named||!age||!grade)
    {
        alert("Nope, enter everything first !");
        return;
    }

    var display=document.getElementById("display");

    var newRow=display.insertRow(row);
    var cell0=newRow.insertCell(0);
    var cell1=newRow.insertCell(1);
    var cell2=newRow.insertCell(2);

    cell0.innerHTML=named;
    cell1.innerHTML=age;
    cell2.innerHTML=grade



}