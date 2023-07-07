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
var items = document.getElementsByClassName('list-group-item');
 console.log(items);
 console.log(items[0]);
// //add item 
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.color = 'green';


// / for(var i=0; i<items.length; i++){
//     //     items[i].style.backgroundColor= 'yellow';
//     // }
    
    
    
    
    //maake 3rd element in the list have green background color
    items[2].style.backgroundColor = 'green';
    
    //make all the elements in the list have bold color font
    for(var i=0; i<items.length; i++){
        items[i].style.fontWeight = 'bold';
    }
    