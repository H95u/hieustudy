function check() {
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let c = a % b;
    let result;

    if (c == 0) {
        result = "so a chia het cho so b"
    } else
        result = "so a khong chia het cho so b"

    document.getElementById('result').innerHTML = result;

}
