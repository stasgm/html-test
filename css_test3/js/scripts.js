function addClass() {
  // const elm = this.parentElement.querySelector(".nested");
  this.parentElement.querySelector(".nested").classList.toggle("active");
  this.classList.toggle("fa-plus-square");
  this.classList.toggle("fa-minus-square");
}

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
const addChild = (list, parent) => {
  list.forEach(i => {
    // Добавляем нод - li
    const treeNode = document.createElement("li");
    treeNode.className = "tree-node";
    parent.appendChild(treeNode);

    // добавляем стрелку (если есть дети)
    if (i.children && i.children.length > 0) {
      const icon = document.createElement("i");
      icon.className = "fa fa-minus-square";
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

getChildren = (level, num) => {
  const children = [];

  const maxChild = (Math.random() * 5 + 1) << 0;
  if (level < 10) {
    for (let i = 0; i < maxChild; i += 1) {
      children.push(getChildren(++level, `${num}.${i + 1}`));
    }
  }

  return {
    name: `${num}`,
    children: children
  };
};

let list = [getChildren(0, 1)];

const root = document.getElementById("root");

const ul = document.createElement("ul");
ul.id = "myUL";
root.appendChild(ul);

addChild(list, ul);
