const form = document.querySelector("form")
const ul = document.querySelector("ul")



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

    })

    deleteBtn.addEventListener("click", () => {
        p.style.display = "none"
        editBtn.style.display = "none"
        deleteBtn.style.display = "none"

    })

    editBtn.addEventListener("click", () => {
        p.style.display = "none";
        input.style.display = "block"
        input.value = p.textContent;
        editBtn.style.display = "none"
        deleteBtn.style.display = "none"
        updateBtn.style.display = "block"

    })
    updateBtn.addEventListener("click", () => {
        input.style.display = "none"
        p.innerText = input.value
        p.style.display = "block"
        updateBtn.style.display = "none"
        editBtn.style.display = "block"
        deleteBtn.style.display = "block"

    })





    e.target.addTask.value = ""

})

