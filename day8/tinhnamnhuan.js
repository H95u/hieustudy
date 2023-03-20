let year = parseInt(prompt("Enter a year"));
let isLeapYear = false;

let isDivisibleBy4 = year % 4 == 0;
if (isDivisibleBy4) {
    let isDivisibleBy100 = year % 100 == 0;
    if (isDivisibleBy100) {
        let isDivisibleBy400 = year % 400 == 0;
        if (isDivisibleBy400) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}
if (isLeapYear) {
    alert(year + " là năm nhuận");
} else {
    alert(year + " không phải là năm nhuận");
}