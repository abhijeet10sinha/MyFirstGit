// Examin the Document Objects

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// Get Element buy ID
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = "Welcome";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
var firstTitle = document.getElementById('1stTitle');
console.log(firstTitle);
firstTitle.textContent = "List of the Items:";
headerTitle.style.borderBottom = 'solid 3px #000';
firstTitle.style.color = 'green';
firstTitle.style.fontWeight = 'bold';