const studentList = [
  'Lisa',
  'Sarah',
  'Anne',
  'George',
  'Daniel',
  'Jionni',
  'Jennifer',
  'Tasha'
];


// Using the new DOM Manipulation library, do all of the following: 
console.log(studentList);
// 1. Render all of the names in `studentList` individually in paragraph tags to the div with the class `content`.

let display = document.getElementsByClassName('content');
  for (let i = 0 ; i < studentList.length ; i++ ){
  render(('<p>' + studentList[i] + '</p>'));
}

// const pupils = studentList[0];

// jQuerry.each( studentList , function( i, val ){
//   $(val).text('');
// });


// render(pupils);


const showData = function (){

}

// console.log(pupils);

function showReg() {
  document.getElementsByName("studentList").style.display = "";
}

// const myFunction = function (event) {
//   const key = event.key;
//   if (key === 'r') {
//     document.write('You pressed R');
//   }
//   else {
//     document.write('You pressed the wrong button');
//   }
// }

var newHTML = [];
for (var i = 0; i < studentList.length; i++) {
    newHTML.push('<p>' + studentList[i] + '</p>');
}
// $(".content").html
// for (let i = 0 ; i < studentList.length ; i++ ){
// document.getElementById(".content").innerHTML = studentList[i];
// }



// document.querySelector('#content').innerHTML = studentList ;

// console.dir(studentList);

// 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. 
// Re-render the list. 
const name = $('#add').val;
studentlist.push(name);

console.log(studentList);

// 3. When the search button is pressed, add the `blue` class to the `body` if the name that was input is in the studentList array.

$("#search").click.style.backgroundColor = 'lightblue'


// 4. When the delete button is pressed, delete the element from studentList that matches the name the user entered in the input field. 
// Re-render the list.

$('#delete').click(function{
  name= $('.name')val();}
)
studentlist.splice(inddex, -1)