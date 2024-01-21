/*function cycleClasses (){
    let elements = document.getElementsByClassName('title');
    for(let i=0;i<elements.length;i++){
        console.log(elements[i]);
    } 
    console.log(elements[1]);
}   
cycleClasses(); 

//console.log(Array.isArray(elements)); //checks whether it's an array
//console.log(Array.isArray(Array.from(elements))) // turn it into an array
let elements = document.getElementsByClassName('title');
 //turn the selected classes to an array, then use the forEach method for arrays to print them all out
 Array.from(elements).forEach(function(item){    
    console.log(item)
}) */

//we're adding functionality to the remove button
//we grab the element

/* let btn = document.querySelectorAll('#book-list .delete')
 console.log(btn);
//change them to an array
btn = Array.from(btn)
console.log(btn)
//add an array method to add more methods on the new array
btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
       // if(confirm("Do you want to delete this book?")){
            //e.target.parentNode.remove()
        //}
        //OR
       //let parent = document.getElementById('#book-list');
       let li = e.target.parentElement
       li.parentNode.removeChild(li);
    })
})*/

/*the method used above applies the bubbling technique: where if we click the delete , we'll fire the even for the delete 
 then 'BUBBLE' up to the parent (li) and it will fire the callback function. This will happen whenever we click th button.
 although this isn't right cause if we were to add anoteher item in the list, the delete button won't function as it should.
 This is because we've already attached the eventListeners with each button, the new button is not newly linked with it.
 and also, if we have a lot of these buttons on the page then it's gonna be a big task to attach all the buttons to the 
 event listener.It take longer for JavaScript to do or complete.
 in this case, attach the event listener to the UL, only one element we've attached the event listener to, and target the
 delete button, this way when we click the button, the event is going to bubble up to the UL but cn find out the target,
 which was originally clicked, which button , then we can delete that li associated with the button. This method is much more
 efficient to do. */

const list = document.querySelector('#book-list ul')
list.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

 //how to prevent a default behavior //assuming we have a link
const link = document.querySelector("#page-banner a");
link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to', e.target.textContent, 'was prevented');
})

//interacting with Form
//grab the form object ,and since it will return a collection, you specify which one. You can use the id or index number
const addForm = document.forms['add-book']; 
//in this case we've used id
 //we then add an eventListener incase an event is fired
 addForm.addEventListener('submit', function(e){
    e.preventDefault(); 
    //prevent default, which is the refreshing of the page whenever the add button is clicked for submission
    //grab the value to print it
    const value = addForm.querySelector('input[type = "text"]').value;
    console.log(value);
    //to actually create and append elements to our HTML
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content to the created elements
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    
    //append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn); //according to its sequence
    list.appendChild(li); 
 })

 //how to add multiple classes
 //const listItem = document.querySelector('li : last-child'); 
 //listItem.className =('test');
 //the next class should have a space before tyrping the className value
 //listItem.className += (' test1')

 /* ///to find and set attributes
 const book = document.querySelector('li:first-child .name')
book.getAttribute('class')
//set attribute
book.setAttribute('class', 'name2')
//to check whether its there
book.hasAttribute('class');
//to remove an attribute
book.removeAttribute('class');
book.setAttribute('class', 'name')
*/

//functionality for hide books
const hide = document.getElementById('hide'); //grabbing the element
hide.addEventListener('change', function(e){
    if(hide.checked){      //use the check button ..mainly used with checkboxes, to confirm if chcking has taken place
        list.style.display = 'none';
    }else{
        list.style.display = 'block' //or initial
    }
})

//filtering the search box
//const searchBar = document.getElementById("search-books").querySelector("input")   //grabbing the reference
const searchBox = document.forms["search-books"].querySelector("input"); //grab the input using the form object, specify which form we've used
searchBox.addEventListener("keyup", function(e){
 const term = e.target.value.toLowerCase();   //grabbed the value on the search input
 const books = list.getElementsByTagName("li"); //grab the list of the books
  Array.from(books).forEach(function(book){     //convert to an array
      const title = book.firstElementChild.textContent;  //grabbed the first list element and its text content
      if(title.toLowerCase().indexOf(term) != -1){ //this line means that we are searching for the value that was typed in and returns the index of where the value is found from the first list element. If the value is not found, it will return -1, so that's why....if the index is not equal to -1, then the book in the list matching it will be displayed.
      book.style.display = "block";
      }else {book.style.display = "none"; }
  })
})





