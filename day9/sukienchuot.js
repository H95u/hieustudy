let imgObj = null;
imgObj = document.getElementById('myImage');
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.top = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
function moveLeft() {
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
}
function moveUp() {
    imgObj.style.top = parseInt(imgObj.style.top) - 10 + 'px';
}
function moveDown() {
    imgObj.style.top = parseInt(imgObj.style.top) + 10 + 'px';
}
window.onload = init;
