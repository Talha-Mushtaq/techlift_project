// create crud operation
var crudArray = [];

const createTodo = () => {
  let input = document.getElementById("crud_input").value;
  if (!input) {
    alert("Please enter a valid input");
  } else {
    let trim = input.trim().toString();
    let txt = trim.charAt(0).toUpperCase() + trim.slice(1);
    crudArray.unshift(txt);
    readTodo();
    document.getElementById("crud_input").value = "";
  }
};

const readTodo = () => {
  let template = "";
  crudArray.map((arr, i) => {
    template =
      template +
      `<h1 style="width: 80%; background-color: green; color: white">${
        i + 1
      }. ${arr}
      <button id="${i}" onClick="deleteTodo(${i})" style="float:right">Delete</button>
      <button id="${i}" onClick="updateTodo('${arr}',${i})" style="float:right">Update</button>
      </h1>
       `;
  });
  document.getElementById("showCrud").innerHTML = template;
};
readTodo();

const deleteTodo = (index) => {
  crudArray.splice(index, 1);
  readTodo();
};

const updateTodo = (arr, index) => {
  let input = prompt("Enter Updated value", arr);
  let trim = input.trim().toString();
  let txt = trim.charAt(0).toUpperCase() + trim.slice(1);
  crudArray[index] = txt;
  readTodo();
};

var colors = ["red", "blue", "pink", "green", "yellow"];
const mapBox = () => {
  let template = "";
  colors.map((color) => {
    template =
      template +
      `
      <div style="width: 80px; height: 80px;
      color:white; background-color: ${color}">${color}</div>
      `;
  });
  document.getElementById("mapColor").innerHTML = template;
};
const filterBox = () => {
  let template = "";
  colors.filter((color) => {
    if (color !== "red")
      template =
        template +
        `
      <div style="width: 80px; height: 80px;color:white; background-color: ${color}">${color}</div>
      `;
  });
  document.getElementById("filterColor").innerHTML = template;
};

const sortBox = () => {
  let template = "";
  let sortedColors = colors.sort();
  sortedColors.map((color) => {
    template =
      template +
      `
      <div style="width: 80px; height: 80px;color:white; background-color: ${color}">${color}</div>
      `;
  });
  document.getElementById("sortColor").innerHTML = template;
};

const reverseBox = () => {
  let template = "";
  let sortedColors = colors.reverse();
  sortedColors.map((color) => {
    template =
      template +
      `
      <div style="width: 80px; height: 80px;color:white; background-color: ${color}">${color}</div>
      `;
  });
  document.getElementById("reverseColor").innerHTML = template;
};
