var i = 0,
  j = 0;
var txt1 = "Innovate.";
var txt2 = "Transform.";
var speed = 150; // Speed in milliseconds

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("demo").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  } else {
    setTimeout(typeWriter2, 500); // Delay before starting the second word
  }
}

function typeWriter2() {
  if (j < txt2.length) {
    document.getElementById("sub_heading").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
}

// Start both functions on page load
window.onload = typeWriter1;

// Optional: If you want to change the text dynamically using JavaScript
function changeText(newText) {
  document.getElementById("bounceText").innerHTML = newText;
}

// Example of changing the text after 3 seconds
setTimeout(() => {
  changeText("IMPACT");
}, 3000);

// Transparent Navbar
// window.addEventListener("scroll", function () {
//   let navbar = document.querySelector(".navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("scrolled"); // Adds background color when scrolled
//   } else {
//     navbar.classList.remove("scrolled"); // Removes background when at the top
//   }
// });

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let navbarTitle = document.getElementById("navbarTitle");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // Adds background color
    navbarTitle.classList.add("scrolled-title"); // Changes text color to white
  } else {
    navbar.classList.remove("scrolled");
    navbarTitle.classList.remove("scrolled-title"); // Resets text color
  }
});
