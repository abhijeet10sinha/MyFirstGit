// //Get Elelment By ID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Welcome";

// var firstTitle = document.getElementById('1stTitle');
// console.log(firstTitle);
// firstTitle.textContent = "List of the Items:";
// headerTitle.style.borderBottom = 'solid 3px #000';
// firstTitle.style.color = 'green';
// firstTitle.style.fontWeight = 'bold';

// //Get Element By Class Name
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'red';
// }
// items[2].style.backgroundColor = 'green';

// //Get Element By Tag Name
// var li = document.getElementsByTagName('li');
// console.log(li[4]);
// li[4].style.color = 'purple';
// li[5].style.fontWeight = 'bolder';

// //Get Element By Class Name
// var li2 = document.getElementsByClassName('list-item');
// console.log(li2);
// for(var i=0;i<li2.length;i++){
//     li2[i].style.color = 'white';
//     li2[i].style.backgroundColor = 'black';
// }

//QuerySelector
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

//QuerySelectorAll
var all = document.querySelectorAll('.list-group-item');
console.log(all);
all[1].style.color = 'yellow';

var elements = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<elements.length;i++){
    elements[i].style.backgroundColor = 'pink';
}