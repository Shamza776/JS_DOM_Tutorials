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
 let btn = document.querySelectorAll('#book-list .delete')
 console.log(btn);
//change them to an array
btn = Array.from(btn)
console.log(btn)
//add an array method to add more methods on the new array
btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
       // if(confirm("Do you want to delete this book?")){
            e.target.parentNode.remove()
        //}
        //OR
       //let parent = document.getElementById('#book-list');
       //let li = e.target.parentElement
       //li.parentNode.removeChild(li);
    })
})