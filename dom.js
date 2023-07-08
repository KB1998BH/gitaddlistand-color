/// examine the document object

//console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'hello';
// console.log(document.forms[0]);
// console.log(document.links);


//console.log(document.images);

//////--- select---////////
// GETELEMENTBYID //
//console.log(document.getElementById('header-title'))

//2nd method;
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';

//////----implement css ---////
//headerTitle.style.borderBottom = 'solid 3px #000'
// header.style.borderBottom = 'solid 3px #000'

// ///-- GETELEMENTBYCLASSNAME ---///
// var items = document.getElementsByClassName('list-group-item');
//  console.log(items);
//  console.log(items[0]);
// //add item 
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.color = 'green';


// / for(var i=0; i<items.length; i++){
//     //     items[i].style.backgroundColor= 'yellow';
//     // }
    
    
    
    
    // //maake 3rd element in the list have green background color
    // items[2].style.backgroundColor = 'green';
    
    // //make all the elements in the list have bold color font
    // for(var i=0; i<items.length; i++){
    //     items[i].style.fontWeight = 'bold';
   // }
   
//       var items = document.getElementsByClassName("list-group-item-add");

// console.log(items);
// console.log(items[0]);
// //add item 
// items.textcontent = 'Hello 2';
// items.style.fontWeight = 'bold';
// items[1].style.color = 'green';


// var items = document.getElementsByTagName("li");

// console.log(items);
// console.log(items[0]);
// //add item 
// items.textcontent = 'Hello 2';
// items.style.fontWeight = 'bold';
// items[1].style.color = 'green';







// //Make the 2nd item have green background color
// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green';

// //Make the 3rd item invisible
// var lastitem =  document.querySelector('.list-group-item:nth-child(3)');
// lastitem.style.color = 'rgba(0,0,0,0)';




////////////////----Now go head and add HEllo word before Item Lister-------/////////
// // Select the first header element inside the container element 
// const firstListItem = document.querySelector("header .container");

// // Create a new text node with the text "Hello World"
// const helloWorldText = document.createTextNode("HEllo");

// // Insert the new text node before the selected item-lister
// firstListItem.parentNode.insertBefore(helloWorldText, firstListItem);


// ////////----Now go head and add HEllo word before Item 1-----//////////

// // Select the first <li> element inside the <ul> element with the ID "myList"
// const firstListItem2= document.querySelector("ul#items li:first-child");

// // Create a new text node with the text "Hello World"
// const helloWorldText2 = document.createTextNode("HEllo");

// // Insert the new text node before the selected <li> element
// firstListItem.parentNode.insertBefore(helloWorldText2, firstListItem2);


//On clicking the delete button we should be able to remove the newly created li tag
//function removeitem 
//delete event 
// itemList.addEventListener('click', removeItem);
// function removeItem(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure?')){
//             var li = e.target.parentElement;
//             itemList.removeChild(li);
      
//         }
//     }
// }





var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event 
form.addEventListener('submit', addItem);

//delete event 
//itemList.addEventListener('click', removeItem);

//Filter event 
filter.addEventListener('keyup', filterItems);

// //add item 
function addItem(e){
    e.preventDefault();
    //console.log(1);

    // Get the input value 
    var newItem = document.getElementById('item').value;

    //create a new li element 
    var li = document.createElement('li');
    //add class 
    li.className = 'list-group-item';
    // console.log(li);

    //add text node with input value 
    li.appendChild(document.createTextNode(newItem));

    // create a delete button 
    var deleteBtn = document.createElement('button');

    //add classes to delete button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node 
    deleteBtn.appendChild(document.createTextNode('x'));

    //append button to li 
    li.appendChild(deleteBtn);

    //append li to list 
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}


//When we type on the input box show me those items from the list which match my search string
///--Filter Items 
function filterItems(e){
    //convert text to lowercase 
    var text = e.target.value.toLowerCase();
    //Get list by tag name 
    var items = itemList.getElementsByTagName('li');
    //convert to an array 
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
    
}