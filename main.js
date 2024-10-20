const input = document.querySelector("input");
const add_task_btn = document.querySelector(".add-task-btn");
const tasks = document.querySelector(".container-task");
const _status = document.querySelector(".task-status-search");
const category = document.querySelector(".task-category-search");
const empty = document.querySelector(".empty");
const opciones_status = document.querySelectorAll(".options-status li a");
const estado_actual = document.getElementById("actual-state");
const opciones_category = document.querySelectorAll(".options-category li a");
const categoria_actual = document.getElementById("actual-category");
const arrow_status = document.getElementById("arrow-status");
const cont_opciones_status = document.querySelector(".options-status");
const cont_opciones_category = document.querySelector(".options-category");
const arrow_category = document.getElementById("arrow-category");

tareas_empty();

cont_opciones_status.style.display = "none"; 
cont_opciones_category.style.display = "none";

arrow_status.addEventListener("click", () => {
  if (cont_opciones_status.style.display === "none") {
    cont_opciones_status.style.display = "block";
    _status.classList.add("active-border");
  } else {
    cont_opciones_status.style.display = "none";
    _status.classList.remove("active-border");
  }
});

opciones_status.forEach(function (opcion) {
  opcion.addEventListener("click", function (event) {
    event.preventDefault();
    const texto_seleccionado = this.textContent;
    if (texto_seleccionado === "Estado...") {
      estado_actual.childNodes[0].textContent = "Estado... ";
      _status.style.color = "#a7abaf";
    } else {
      estado_actual.childNodes[0].textContent = texto_seleccionado + " ";
      _status.style.color = "#000";
    }
    _status.classList.remove("active-border");
    cont_opciones_status.style.display = "none";
  });
});

arrow_category.addEventListener("click", () => {
  if (cont_opciones_category.style.display === "none") {
    cont_opciones_category.style.display = "block";
    category.classList.add("active-border");
  } else {
    cont_opciones_category.style.display = "none";
    category.classList.remove("active-border");
  }
});

opciones_category.forEach(function (opcion) {
  opcion.addEventListener("click", function (event) {
    event.preventDefault();
    const texto_seleccionado = this.textContent;
    if (texto_seleccionado === "Categoría...") {
      categoria_actual.childNodes[0].textContent = "Categoría... ";
      category.style.color = "#a7abaf";
    } else {
      categoria_actual.childNodes[0].textContent = texto_seleccionado + " ";
      category.style.color = "#000";
    }
    category.classList.remove("active-border");
    cont_opciones_category.style.display = "none";
  });
});

add_task_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const text_input = input.value;
  const text_status = estado_actual.textContent;
  const text_category = categoria_actual.textContent;
  if (text_input !== "") {
    const task = document.createElement("div");
    task.classList.add("task");
    const p_input = document.createElement("p");
    const p_status = document.createElement("p");
    const p_category = document.createElement("p");
    p_input.textContent = text_input;
    p_status.textContent = text_status;
    p_category.textContent = text_category;
    task.appendChild(p_input);
    task.appendChild(p_status);
    task.appendChild(p_category);
    task.appendChild(add_delete_task_button());
    tasks.appendChild(task);
    input.value = "";
    estado_actual.childNodes[0].textContent = "Estado... ";
    categoria_actual.childNodes[0].textContent = "Categoría... ";
    _status.style.color = "#a7abaf";
    category.style.color = "#a7abaf";
    tareas_empty();
  }
});

function add_delete_task_button() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-task-button";
  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    tasks.removeChild(item);
    tareas_empty();
  });
  return deleteBtn;
}

function tareas_empty() {
  const items = document.querySelectorAll(".task");
  if (items.length === 0) {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
  }
}

document.addEventListener("click", (e) => {
  if (
    !cont_opciones_status.contains(e.target) &&
    !arrow_status.contains(e.target)
  ) {
    cont_opciones_status.style.display = "none";
    _status.classList.remove("active-border");
  }
  if (
    !cont_opciones_category.contains(e.target) &&
    !arrow_category.contains(e.target)
  ) {
    cont_opciones_category.style.display = "none";
    category.classList.remove("active-border");
  }
});
