const form = document.querySelector("form")
const ul = document.querySelector("ul")


// function addTodo(){

//     const inputs=document.getElementById("inputs")
//     const listContainer=document.getElementById("list_Container")



//     if(inputs.value.trim() === ""){
//         alert("please enter the task")

//         return;
//     }


//     const todoText = inputs.value;
//     const todoItem = document.createElement("li")


//     todoItem.innerText= todoText;
//     listContainer.appendChild(todoItem)

//     inputs.value="";

//     saveTodoTolocalStorage(listContainer);


// }


// function saveTodoTolocalStorage(listContainer){
//   const todos=[];

//   for (let i =0; i < listContainer.children.length; i++){
//      todos.push(listContainer.children[i].innerText);
//   }
// console.log(todos);
//   localStorage.setItem('todos',JSON.stringify(todos));
// }


// function loadToDoFromTheLocalStorage(){
//     const listContainer =document.getElementById("list_Container")
//     const todos = JSON.parse(localStorage.getItem("todos"))

//     if (todos){
//         for(let i =0; i < todos.length; i++){
//             const todoItem=document.createElement("li");
//             todoItem.innerText=todos[i];
//             listContainer.appendChild(todoItem)
//         }
//     }
// }

// loadToDoFromTheLocalStorage();

// localStorage.clear





form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTask = e.target.addTask.value;

    const li = document.createElement('li');
    const p = document.createElement("p");
    p.textContent = newTask

    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("class", "input")




    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")
    const updateBtn = document.createElement("button")

    editBtn.setAttribute("type", "button")
    editBtn.setAttribute("class", "button")


    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("class", "button");

    updateBtn.setAttribute("type", "button");
    updateBtn.setAttribute("class", "button");


    const editBtnIcon = document.createElement("i");
    const deleteBtnIcon = document.createElement("i");
    const updateBtnIcon = document.createElement("i");

    editBtnIcon.setAttribute("class", "fa fa-light fa-pen-to-square")
    editBtn.appendChild(editBtnIcon)

    deleteBtnIcon.setAttribute("class", "fa-solid fa-trash")
    deleteBtn.appendChild(deleteBtnIcon)

    updateBtnIcon.setAttribute("class", "fa-solid fa-check-double")
    updateBtn.appendChild(updateBtnIcon)

    const btn = document.createElement("div")
    btn.setAttribute("class", "btn")

    btn.appendChild(deleteBtn)
    btn.appendChild(editBtn)
    btn.appendChild(updateBtn)





    li.appendChild(p)
    li.appendChild(input)
    li.appendChild(btn)
    ul.appendChild(li)

    updateBtn.style.display = "none";
    input.style.display = "none";


    p.addEventListener("click", () => {
        p.classList.toggle("complete")
        saveTodoListLocalStorage(ul)

    })

    deleteBtn.addEventListener("click", () => {
        p.style.display = "none"
        editBtn.style.display = "none"
        deleteBtn.style.display = "none"
        saveTodoListLocalStorage(ul)

    })

    editBtn.addEventListener("click", () => {
        p.style.display = "none";
        input.style.display = "block"
        input.value = p.textContent;
        editBtn.style.display = "none"
        deleteBtn.style.display = "none"
        updateBtn.style.display = "block"
        saveTodoListLocalStorage(ul)

    })
    updateBtn.addEventListener("click", () => {
        input.style.display = "none"
        p.innerText = input.value
        p.style.display = "block"
        updateBtn.style.display = "none"
        editBtn.style.display = "block"
        deleteBtn.style.display = "block"
        saveTodoListLocalStorage(ul)


    })





    e.target.addTask.value = ""


    saveTodoListLocalStorage(ul,)



})




function saveTodoListLocalStorage(ul) {

    const todos = [];
    for (let i = 0; i < ul.children.length; i++) {
        todos.push(ul.children[i].innerText)
    }

    console.log(todos,"at start");
    localStorage.setItem("data", JSON.stringify(todos))

}


function getDataFromLocalStorage() {
    const listContainer = document.getElementById("list_Container")
    const todos = JSON.parse(localStorage.getItem("data"))

    if (todos) {
        for (let i = 0; i < todos.length; i++) {
            const p = document.createElement("p")
            const li = document.createElement("li")
            
        

           
            p.innerText = todos[i];
    console.log(todos,"at end");
            
            const input = document.createElement("input")
            input.setAttribute("type", "text")
            input.setAttribute("class", "input")
        



            const editBtn = document.createElement("button")
            const deleteBtn = document.createElement("button")
            const updateBtn = document.createElement("button")

            editBtn.setAttribute("type", "button")
            editBtn.setAttribute("class", "button")
        
        
            deleteBtn.setAttribute("type", "button");
            deleteBtn.setAttribute("class", "button");
        
            updateBtn.setAttribute("type", "button");
            updateBtn.setAttribute("class", "button");


            const editBtnIcon = document.createElement("i");
            const deleteBtnIcon = document.createElement("i");
            const updateBtnIcon = document.createElement("i");
        
            editBtnIcon.setAttribute("class", "fa fa-light fa-pen-to-square")
            editBtn.appendChild(editBtnIcon)
        
            deleteBtnIcon.setAttribute("class", "fa-solid fa-trash")
            deleteBtn.appendChild(deleteBtnIcon)
        
            updateBtnIcon.setAttribute("class", "fa-solid fa-check-double")
            updateBtn.appendChild(updateBtnIcon)
            

            const btn = document.createElement("div")
            btn.setAttribute("class", "btn")
        
            btn.appendChild(deleteBtn)
            btn.appendChild(editBtn)
            btn.appendChild(updateBtn)
        
            
            li.appendChild(p)
            li.appendChild(input)
             li.appendChild(btn)
            listContainer.appendChild(li)

            updateBtn.style.display = "none";
            input.style.display="none"
            
    p.addEventListener("click", () => {
        p.classList.toggle("complete")
        saveTodoListLocalStorage(ul)

    })

    
    editBtn.addEventListener("click", () => {
        p.style.display = "none";
        input.style.display = "block"
        input.value = p.textContent;
        editBtn.style.display = "none"
        deleteBtn.style.display = "none"
        updateBtn.style.display = "block"
        saveTodoListLocalStorage(ul)

    })
    updateBtn.addEventListener("click", () => {
        input.style.display = "none"
        p.innerText = input.value
        p.style.display = "block"
        updateBtn.style.display = "none"
        editBtn.style.display = "block"
        deleteBtn.style.display = "block"
        saveTodoListLocalStorage(ul)
    
    })

    deleteBtn.addEventListener("click", () => {
        p.style.display = "none"
        editBtn.style.display = "none"
        deleteBtn.style.display = "none" 
        saveTodoListLocalStorage(ul)

    })

        }


    }

}



getDataFromLocalStorage()







