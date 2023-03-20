function tinhbmi() {
    let weight = document.getElementById("weight1").value;
    let height = document.getElementById("height1").value;
    let bmi = weight / (Math.pow(height, 2));
    let result = "";

    if (bmi < 18.5)
        result = "Underweight"
    else if (18.5 <= bmi && bmi < 25)
        result = "Normal"
    else if (25 <= bmi && bmi < 30)
        result = "Overweight"
    else if (30 <= bmi)
        result = "Obese"

    document.getElementById("result").innerHTML = result
}