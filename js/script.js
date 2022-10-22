// question 1
/* Create an object called catGive the object one property called complain.
complain's value should be a method (a function) which logs the string "Meow!".*/

// your answer for question 1 goes here
function catComplaint() {
  console.log("Meow!");
}

const cat = {
  complain: catComplaint(),
};

// question 2
/* Select the h3 from the HTML using the querySelector method and assign it to a variable called heading. Change its innerHTML value to "Updated heading".*/

// your answer for question 2 goes here
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question 3
/* Use the style property on the heading variable from the question above to change its font size to "2em".*/

// your answer for question 3 goes here
heading.style.fontSize = "2em";

// question 4
/* Add a class to the heading cariable called subheading. */

// your answer for question 4 goes here
heading.classList.add("subheading");

// question 5
/* Write code that selects all the p elements on a page and assigns them to a variable called paragraphs. Loop through the p elements and change the colour of each to "red".*/

// your answer for question 5 goes here
var paragraphs = document.querySelectorAll("p");

function changeColor(paragraph) {
  paragraph.style.color = "red";
}

for (var i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i]);
  changeColor(paragraphs[i]);
}

// question 6
/* Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p> and its background colour to be yellow.*/

// your answer for question 6 goes here
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7
/* Create a function that has one parameter called list.
Inside the function, loop through the list parameter and console log the name property in each object.
Call the function and pass in the cats variable in the script.js file in the repo.*/

// your answer for question 7 goes here
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function catList(list) {
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catList(cats);

// question 8
/* Create a function called createCats. The function will have one parameter called cats.
Inside the function loop through the value passed in as cats and create HTML for each object in the array.
Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
If the age property is missing, it should display “Age unknown” instead.
Return the HTML from the function.
Call the function and pass in the cats array as the argument.
Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container. */

// your answer for question 8 goes here
const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  const htmlArray = [];
  cats.forEach((cat) => {
    if (cat.age) {
      const HTML = `<div><h5>${cat.name}</h5><p>${cat.age}</p></div>`;
      htmlArray.push(HTML);
    }
  });
  return htmlArray;
}

catContainer.innerHTML = createCats(cats);
