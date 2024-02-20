const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
//eventlisteners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);


//functions
function addTodo(event){

    event.preventDefault();
    //TODODIV
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    //LI
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button 
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
     //check delete button 
     const deletedButton=document.createElement("button");
    deletedButton.innerHTML='<i class="fas fa-trash"></i>';
    deletedButton.classList.add("deleted-btn");
    todoDiv.appendChild(deletedButton);
     //append to list
     todoList.appendChild(todoDiv);
     //clear todo input value
     todoInput.value="";

}
function deleteCheck(e){
 const item=e.target;
 //delete todo
 if(item.classList[0]==="deleted-btn");{
    //since delete todoInput deletes the entire bar so deleting the parentElement
    const todo=item.parentElement;
    todo.remove();
 }
 //check mark
 if(item.classList[0]==="completed-btn"){
    const todo=item.parentElement;
    todo.classList.toggle("completed");
 }
}