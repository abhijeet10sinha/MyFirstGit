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
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// //QuerySelectorAll
// var all = document.querySelectorAll('.list-group-item');
// console.log(all);
// all[1].style.color = 'yellow';

// var elements = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0;i<elements.length;i++){
//     elements[i].style.backgroundColor = 'pink';
// }

//Traversing the DOM
// var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'cyan';
//console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNode
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'blue';

// creatElement
// creata a div
// var newDiv = document.createElement('div');
// // Add class
// newDiv.className = 'hello';
// // Add ID
// newDiv.id = 'hello1';
// // Add attribute
// newDiv.setAttribute('title', 'Hello Div');
// // create text node
// var newDivText = document.createTextNode('Hello World');
// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '22px';
// container.insertBefore(newDiv, h1);

// console.log(newDiv);

// // createElement2
// // var list = document.createElement('li');
// // // Add class
// // list.className = 'list-group-item';
// // //create text node
// // var newList = document.createTextNode('Item 0');
// // // Add text
// // list.appendChild(newList);

// // var container2 = document.querySelector('ul .list-group-item');
// // var h2 = document.querySelector('ul li');

// // list.style.fontSize = '15px';
// // container2.insertBefore(list, li);

// // console.log(list);

// var parentNode = document.getElementById('items');
// parentNode.className = 'list-group';
// var list = document.createElement('li');
// parentNode.innerHTML = '<li>Hello World</li>' + parentNode.innerHTML;

var form = document.getElementById('addForm');
var itemList  = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();
    // get input value
    var newItem = document.getElementById('item').value;
    var description = document.getElementById('description').value;
    // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+description));

    // create delete button element
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    
    // add class to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    editBtn.className = 'btn btn-outline-primary btn-sm float-end';
    
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));
    
    // append btn to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    //append li to list
    itemList.appendChild(li);
}



//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter Items
function filterItems(e){
    //convert text to lower text
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}
