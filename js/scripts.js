import { getList } from "./tree-data/world.js";
import { list as simpleList } from "./tree-data/simple.js";

// Общие кнопки
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

function loadDataEarth() {
  const root = document.getElementById("content");

  if (document.getElementById("myUL")) {
    root.removeChild(document.getElementById("myUL"));
  }

  const ul = document.createElement("ul");
  ul.id = "myUL";
  root.appendChild(ul);

  let list = [];

  getList().then(res => {
    list = res;
    addChild(list, ul);
  });
}

function loadData(e) {
  const root = document.getElementById("content");

  if (document.getElementById("myUL")) {
    root.removeChild(document.getElementById("myUL"));
  }

  const ul = document.createElement("ul");
  ul.id = "myUL";
  root.appendChild(ul);

  switch (e.target.value) {
    case "1":
      getList().then(res => {
        addChild(res, ul);
      });
      break;
    case "2":
      addChild(simpleList, ul);      
      break;
    case "3":
      addChild([getChildren(0, 1)], ul);      
      break;
    default:
      break;
  }
}

// buttons event handlers
document
  .querySelector("#collapse-tree")
  .addEventListener("click", collapseTree);

document.querySelector("#expand-tree").addEventListener("click", ExpandTree);

document.querySelector("#data-list").addEventListener("change", loadData);

// обработка элементов дерева
function toggleTreeNode() {
  this.parentElement.querySelector(".nested").classList.toggle("active");
  this.classList.toggle("fa-plus-square");
  this.classList.toggle("fa-minus-square");
}

function setCheckBox() {
  this.classList.toggle("fa-square");
  this.classList.toggle("fa-check-square");
}

function clickNode(e) {
  console.log(e.target.textContent);
  
}

const addChild = (list, parent) => {
  list.forEach(i => {
    // Добавляем нод - li
    const treeNode = document.createElement("li");
    treeNode.className = "tree-node";
    parent.appendChild(treeNode);
    // добавляем + (если есть дети)
    if (i.children && i.children.length > 0) {
      const icon = document.createElement("i");
      icon.className = "icon far fa-plus-square";
      icon.onclick = toggleTreeNode;
      treeNode.appendChild(icon);
    } else {
      // Пропуск на месте +
      const iconSpace = document.createElement("span");
      iconSpace.className = "icon-space";
      iconSpace.innerHTML = "&nbsp;";
      treeNode.appendChild(iconSpace);
    }
    // добавляем чекбокс
    const iconCheckBox = document.createElement("i");
    iconCheckBox.className = "icon-checkbox far fa-square";
    iconCheckBox.onclick = setCheckBox;
    treeNode.appendChild(iconCheckBox);
    // добавляем название
    const spanTextWrapper = document.createElement("span");
    spanTextWrapper.className = "node-name-wrapper";
    spanTextWrapper.title = i.name;
    treeNode.appendChild(spanTextWrapper);
    //
    const spanText = document.createElement("span");
    i.children && i.children.length > 0
      ? (spanText.className = "node-name node-group")
      : (spanText.className = "node-name node-item");
    spanText.innerText = i.name;
    spanText.onclick = clickNode;
    spanTextWrapper.appendChild(spanText);

    // добавляем детей (если есть дети)
    if (i.children && i.children.length > 0) {
      const nested = document.createElement("ul");
      nested.className = "nested";
      treeNode.appendChild(nested);

      addChild(i.children, nested);
    }
  });
};

const getChildren = (level, num) => {
  const children = [];

  const maxChild = (Math.random() * 5 + 1) << 0;
  const maxLevel = (Math.random() * 10 + 1) << 0;
  if (level < maxLevel) {
    for (let i = 0; i < maxChild; i += 1) {
      children.push(getChildren(++level, `${num}.${i + 1}`));
    }
  }

  return {
    name: `${num}`,
    children: children
  };
};

loadDataEarth();
