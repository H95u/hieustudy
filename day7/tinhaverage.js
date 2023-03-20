function average(){
    let num1 = document.getElementById('physic').value;
    let num2 = document.getElementById('chem').value;
    let num3 = document.getElementById('biology').value;
    let average = (Number(num1) + Number(num2) + Number(num3))/3;
    document.getElementById("average").innerHTML= average
}
function add(){
    let num1 = document.getElementById('physic').value;
    let num2 = document.getElementById('chem').value;
    let num3 = document.getElementById('biology').value;
    let total = Number(num1) + Number(num2) + Number(num3);
    document.getElementById("total").innerHTML= total
}

