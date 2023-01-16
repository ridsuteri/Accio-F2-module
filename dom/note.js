// ************1. accessing anything from the dom tree*******************


//1. select something by the elements id
document.getElementById("heading1");
//2. select something by the elements className
document.getElementsByClassName("heading-class")[2];

// above code is same as below code
// let collection = ["element1", "element2","elemen3"]
// collection[0];

//3. select something by the elements Tag names
document.getElementsByTagName("h1");
// document.querySelector(".heading1");
// document.querySelectorAll();



// ***************2. modifying anything from the dom tree****************

// innerText - it only takes the text without any indentation or formatting
// innerHTML - it also takes any sort of html (incase written) in the element
// textContent - it takes the text only but also keeps the indentation and formatting

// in case of form inputs
// .value on element


// 1. change the text of an element
document.getElementById("heading1").innerText;



//*************3. creating new element ***********/
let divElement = document.createElement("div")
// adding content to the div
divElement.innerText = "I am a newly created div";


//*************4. adding somthing to the page ***********/
Element.append("I am added using append method");
Element.appendChild(divElement);


// *************5. removing somthing from the page ***********/
Element.remove();

// *************6. getting and setting attributes ***********/

Element.getAttribute("attributName");
Element.setAttribute("attributName", "value");

// for ids
element.id = "idName";

// for classes
element.classList;
// element.classList.add('class-name');
// element.classList.remove('class-name');


// *************7. altering the styles ***********/
Element.style.backgroundColor = "red";


// *************8. adding event listeners ***********/
element.addEventListener('event', func);