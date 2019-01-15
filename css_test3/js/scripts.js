const addClass = () => {
  this.parentElement.querySelector(".nested").classList.toggle("active");
  this.classList.toggle("caret-down");
};

var root = document.getElementById("root");
/* 
var toggler = document.getElementsByClassName("caret");
  for (var i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", addClass);
} */

const list = [
  {
    name: "First",
    children: [
      {
        name: "first. first",
        children: []
      },
      {
        name: "first. first",
        children: [
          {
            name: "f-f-f",
            children: []
          }
        ]
      }
    ]
  }
];

var ul = document.createElement("ul");
root.appendChild(ul);



list.forEach(i => {
  const child = document.createElement("li");
  child.innerText = i.name;
  ul.appendChild(child);
  console.log(i.name);
  
});
