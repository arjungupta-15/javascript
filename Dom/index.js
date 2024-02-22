let head = document.getElementById("head");
console.dir(head);

let headings = document.getElementsByClassName("headings")
console.log(headings);
console.dir(headings);

let param = document.getElementsByTagName("p")
console.log(param);
console.dir(param)

let elements = document.querySelector("p");
console.dir(elements);

let allelements = document.querySelectorAll("p");
console.dir(allelements);

let nelements = document.querySelector(".headings");
console.dir(nelements);

/*Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.*/

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText+"apna college";