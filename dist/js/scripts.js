import { getList } from "./tree-data/world.js";

function addClass() {
  this.parentElement.querySelector(".nested").classList.toggle("active");
  this.classList.toggle("fa-plus-square");
  this.classList.toggle("fa-minus-square");
}

<<<<<<< HEAD
/* const list = [
  {
    name: "1",
    children: [
      {
        name: "1.1",
        children: [
          {
            name: "1.1.1",
            children: []
          },
          {
            name: "1.1.2",
            children: []
          }
        ]
      },
      {
        name: "1.2",
        children: [
          {
            name: "1.2.1",
            children: []
          },
          {
            name: "1.2.2",
            children: [
              {
                name: "1.2.2.1",
                children: []
              },
              {
                name: "1.2.2.2",
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "2",
    children: [
      {
        name: "2.1",
        children: []
      },
      {
        name: "2.2",
        children: [
          {
            name: "2.2.1",
            children: []
          },
          {
            name: "2.2.2",
            children: []
          }
        ]
      }
    ]
  }
];
 */
=======
function ExpandTree() {
  document.querySelectorAll(".nested").forEach(node => {
    if (!node.classList.contains("active")) {
      node.classList.add("active");
    }
  });

  document.querySelectorAll(".icon").forEach(node => {
    if (!node.classList.contains("fa-minus-square")) {
      node.classList.remove("fa-plus-square");
      node.classList.add("fa-minus-square");
    }
  });
}

function collapseTree() {
  document.querySelectorAll(".nested").forEach(node => {
    if (node.classList.contains("active")) {
      node.classList.remove("active");
    }
  });

  document.querySelectorAll(".icon").forEach(node => {
    if (node.classList.contains("fa-minus-square")) {
      node.classList.add("fa-plus-square");
      node.classList.remove("fa-minus-square");
    }
  });
}

// buttons event handlers
document
  .querySelector("#collapse-tree")
  .addEventListener("click", collapseTree);
document.querySelector("#expand-tree").addEventListener("click", ExpandTree);

>>>>>>> ead01cff1e7d21143a2fc024cd42626a45953daa
const addChild = (list, parent) => {
  list.forEach(i => {
    // Добавляем нод - li
    const treeNode = document.createElement("li");
    treeNode.className = "tree-node";
    parent.appendChild(treeNode);

    // добавляем стрелку (если есть дети)
    if (i.children && i.children.length > 0) {
      const icon = document.createElement("i");
<<<<<<< HEAD
      icon.className = "fa fa-minus-square";
=======
      icon.className = "icon fa fa-plus-square";
>>>>>>> ead01cff1e7d21143a2fc024cd42626a45953daa
      icon.onclick = addClass;
      treeNode.appendChild(icon);
    }
    // добавляем чекбокс
    // добавляем название
    const spanTextWrapper = document.createElement("span");
    spanTextWrapper.className = "node-name-wrapper";
    spanTextWrapper.title = i.name;
    treeNode.appendChild(spanTextWrapper);

    const spanText = document.createElement("span");
    i.children && i.children.length > 0
      ? (spanText.className = "node-name node-group")
      : (spanText.className = "node-name node-item");
    spanText.innerText = i.name;
    spanTextWrapper.appendChild(spanText);

    // добавляем детей (если есть дети)
    if (i.children && i.children.length > 0) {
      const nested = document.createElement("ul");
      nested.className = "nested active";
      treeNode.appendChild(nested);

      addChild(i.children, nested);
    }
  });
};

<<<<<<< HEAD
getChildren = (level, num) => {
  const children = [];

  const maxChild = (Math.random() * 5 + 1) << 0;
  if (level < 10) {
=======
const getChildren = (level, num) => {
  const children = [];

  const maxChild = (Math.random() * 5 + 1) << 0;
  const maxLevel = (Math.random() * 10 + 1) << 0;
  if (level < maxLevel) {
>>>>>>> ead01cff1e7d21143a2fc024cd42626a45953daa
    for (let i = 0; i < maxChild; i += 1) {
      children.push(getChildren(++level, `${num}.${i + 1}`));
    }
  }

  return {
    name: `${num}`,
    children: children
  };
};

<<<<<<< HEAD
let list = [getChildren(0, 1)];

const root = document.getElementById("root");
=======
const root = document.getElementById("content");
>>>>>>> ead01cff1e7d21143a2fc024cd42626a45953daa

const ul = document.createElement("ul");
ul.id = "myUL";
root.appendChild(ul);

// let list = [getChildren(0, 1)];
let list = [];
getList().then(res => {
  list = res;
  addChild(list, ul);
});
