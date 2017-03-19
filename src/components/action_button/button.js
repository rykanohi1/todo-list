// make a to do list that takes a text value as its input
// and displays it in a list format

const doc = window.document;
// i need a list to contain all my tasks
const toDoList = doc.getElementById("todo-list");
const toDoInput = doc.getElementById("todo-input");
const click = "click";


// SRP - Single Responsibility Principle
// SOLID - SRP, Open/Closed, Liskov Substitution, Interface Seg, Dependency Injection - OOP
// Any given function should do one and only one thing

doc.addEventListener("DOMContentLoaded", ()=>{
// I need buttons for each function I perform on the to do list
// i will need a button that adds a task to the list

    function addDeleteTodoListener(deleteButton, toDo) {
      deleteButton.addEventListener(click, event=>{
        event.preventDefault();
        toDoList.removeChild(toDo);
      });
    }

    function setToDoWords(toDo){
      const span = doc.createElement('span');
      span.textContent = toDoInput.value;
      toDo.appendChild(span);
    }

    function buildToDoNode(toDo,deleteButton){
      deleteButton.appendChild(doc.createTextNode("\u00D7"));
      toDo.appendChild(deleteButton);
      toDoList.appendChild(toDo);
    }

    function clearInput(){
        toDoInput.value = "";
    }

    doc.querySelector("#add-button").addEventListener(click,()=>{
      const toDo = doc.createElement("li");
      const deleteToDo = doc.createElement("button");
      deleteToDo.setAttribute("type", "button");
      if(toDoInput.value !== ""){
      setToDoWords(toDo);
      addDeleteTodoListener(deleteToDo, toDo);
      buildToDoNode(toDo,deleteToDo);
      clearInput();
      };
    });

    doc.querySelector("form").addEventListener("submit", event=>{
        event.preventDefault();
        toDoInput.value = "";
    });


// I will need a sort of button linked to the task item that check marks it
    doc.querySelector("#todo-list").addEventListener(click, event=>{
      const todo = event.target;
      const isTodoChecked = todo.className;
      // the key is the element's tag name
      if(todo.tagName.toLowerCase() === "span"){
        todo.className = isTodoChecked  // is this value truthy?
          ? ""  //returns if truth
          : "checked"; // returns if falsy
      }
    });
});
