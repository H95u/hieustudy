let product = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S", "Xiaomi Mi 5S Plus", "Apple iPhone 8 Plus", "Fujitsu F-04E", "Oppo A71"]

function showProduct() {
    let table = "<table>";
    table += "<tr><th>STT</th><th colspan='3'>Tên sản phẩm</th></tr>";
    for (let i = 0; i < product.length; i++) {
        table += "<tr>";
        table += "<td>" + (i + 1) + "</td>";
        table += "<td>" + product[i] + "</td>";
        table += "<td><button onclick='deleteProduct(\""+  product[i]+ "\" )'>Delete</button></td>";
        table += "<td><button onclick='editProduct("+ i +")'>Edit</button></td>";
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("product-list").innerHTML= table;
    console.log(product);

}

function addProduct(newProduct) {
    product.push(newProduct)
    alert("Sản phẩm mới đã được thêm vào danh sách");
    showProduct();
}

function updateProduct(oldName, newName) {
    let index = product.indexOf(oldName);
    if (index !== -1) {
        product.splice(index, 1, newName);
        alert("tên sản phẩm đã được cập nhật");
    } else {
        alert("không tìm thấy sản phẩm");
    }
}


function deleteProduct(productName) {
    let confirm = window.confirm("Xóa?")
    if (confirm){
    let index = product.indexOf(productName);
    if (index !== -1) {
        product.splice(index, 1);
        alert("Sản phẩm đã xóa khỏi danh sách")
    } else {
        alert("Không tìm thấy sản phẩm")
    }showProduct();
}
}
function editProduct(index) {
    let newName = prompt("Nhập tên sản phẩm mới:");
    if (newName) {
        product[index] = newName;
        alert("Tên sản phẩm đã được cập nhật")
        showProduct();
    }
}

function hideProduct() {
    document.getElementById("product-list").style.display = "none";
}









