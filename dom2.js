console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = "Welcome";

var firstTitle = document.getElementById('1stTitle');
console.log(firstTitle);
firstTitle.textContent = "List of the Items:";
headerTitle.style.borderBottom = 'solid 3px #000';
firstTitle.style.color = 'green';
firstTitle.style.fontWeight = 'bold';

var items = document.getElementsByClassName('list-group-item');
console.log(items);

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'red';
}
items[2].style.backgroundColor = 'green';