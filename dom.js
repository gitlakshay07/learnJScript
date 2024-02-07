                                                            // Document Object Model (DOM)

// let head = document.getElementById("heading");
// console.dir(head);

// let heading = document.getElementsByClassName("headings");
// console.dir(heading);
// console.log(heading);

// let btn = document.getElementsByTagName("button");
// console.log(btn);
// note => if need all tags then use TagNameall

// let element = document.querySelector("#heading");
// let elements = document.querySelectorAll("p");
// console.log(element);
// console.dir(elements);

// attributes in DOM
        // get attribute

// let div = document.querySelector("div")
// console.log(div);

// let id = div.getAttribute("id")
// console.log(id);

// let name = div.getAttribute("name")
// console.log(name);

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"));

        // set attribute
// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "newclass"));

        // Style In DOM
// let div = document.querySelector("div")

// div.style.backgroundColor = "green";
// div.style.fontSize = "24px";

// Inserts elements in DOM

// let newBtn = document.createElement("button");
// newBtn.innerText ="Click Me!";

// To add in html

// let p = document.querySelector("p")
// let div = document.querySelector("div")

// div.append(newBtn);
// div.prepend(newBtn);
// p.before(newBtn);
// p.after(newBtn);

// To remove in Html

// let para = document.querySelector("p");
// para.remove();