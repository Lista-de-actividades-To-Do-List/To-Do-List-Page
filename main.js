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
const imagen = document.querySelector("img");
const cont_opciones_status = document.querySelector(".options-status");
const cont_opciones_category = document.querySelector(".options-category");

imagen.addEventListener("click", () => {
  if (cont_opciones_status.style.display === "none") {
    cont_opciones_status.style.display = "block";
  } else {
    cont_opciones_status.style.display = "none";
  }
});

opciones_status.forEach(function (opcion) {
  opcion.addEventListener("click", function (event) {
    event.preventDefault();
    const texto_seleccionado = this.textContent;
    estado_actual.childNodes[0].textContent = texto_seleccionado + " ";
  });
});

add_task_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const text_input = input.value;
  const text_status = _status.value;
  const text_category = category.value;
  if (text_input !== "") {
    const task = document.createElement("tasks");
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
    empty.style.display = "none";
  }
});

function add_delete_task_button() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-task-button";
  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    tasks.removeChild(item);
    const items = document.querySelectorAll(".task");
    if (items.length == 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}
