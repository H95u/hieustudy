function add() {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let result = num1 + num2;
    document.getElementById('result').innerHTML = result;
}

function sub() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) - Number(num2);
    document.getElementById('result').innerHTML = result;
}

function mul() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) * Number(num2);
    document.getElementById('result').innerHTML = result;
}

function dev() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) / Number(num2);
    document.getElementById('result').innerHTML = result;

}


