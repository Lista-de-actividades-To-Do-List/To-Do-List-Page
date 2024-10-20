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
const delete_all_task_btn = document.querySelector(".delete-all-task-btn");

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
    const task_content = document.createElement("div");
    task_content.classList.add("task-content");
    const task_p = document.createElement("div");
    task_p.classList.add("task-p");
    const p_content = document.createElement("p");
    p_content.textContent = text_input;
    task_p.appendChild(p_content);
    const status_span = create_task_status(text_status);
    const category_span = create_task_category(text_category);
    task_content.appendChild(task_p);
    task_content.appendChild(create_dividing_line());
    task_content.appendChild(status_span);
    task_content.appendChild(create_dividing_line());
    task_content.appendChild(category_span);
    task.appendChild(task_content);
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

function create_task_status(text_status) {
  const status_span = document.createElement("span");
  status_span.classList.add("task-status-p");
  const task_status_p = document.createElement("p");
  task_status_p.textContent = text_status;
  status_span.appendChild(task_status_p);
  const arrow = document.createElement("img");
  arrow.src = "assets/down-arrow.png";
  arrow.classList.add("arrow");
  status_span.appendChild(arrow);
  const options_status = create_status_options(status_span, task_status_p);
  status_span.appendChild(options_status);
  arrow.addEventListener("click", () => {
    options_status.style.display =
      options_status.style.display === "none" ? "block" : "none";
  });
  return status_span;
}

function create_task_category(text_category) {
  const category_span = document.createElement("span");
  category_span.classList.add("task-category-p");
  const task_category_p = document.createElement("p");
  task_category_p.textContent = text_category;
  category_span.appendChild(task_category_p);
  const arrow = document.createElement("img");
  arrow.src = "assets/down-arrow.png";
  arrow.classList.add("arrow");
  category_span.appendChild(arrow);
  const options_category = create_category_options(
    category_span,
    task_category_p
  );
  category_span.appendChild(options_category);
  arrow.addEventListener("click", () => {
    options_category.style.display =
      options_category.style.display === "none" ? "block" : "none";
  });
  return category_span;
}

function create_status_options(status_span, task_status_p) {
  const ul = document.createElement("ul");
  ul.classList.add("options-status");
  ul.style.display = "none";
  ["Pendiente", "En proceso", "Completada"].forEach((status) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = status;
    a.addEventListener("click", function () {
      task_status_p.textContent = status;
      ul.style.display = "none";
    });
    li.appendChild(a);
    ul.appendChild(li);
  });
  return ul;
}

function create_category_options(category_span, task_category_p) {
  const ul = document.createElement("ul");
  ul.classList.add("options-category");
  ul.style.display = "none";
  ["Personal", "Trabajo", "Estudio"].forEach((category) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = category;
    a.addEventListener("click", function () {
      task_category_p.textContent = category;
      ul.style.display = "none";
    });
    li.appendChild(a);
    ul.appendChild(li);
  });

  return ul;
}

function create_dividing_line() {
  const img = document.createElement("img");
  img.src = "assets/remove.png";
  img.alt = "Dividing line";
  img.classList.add("dividing-line");
  return img;
}

function add_delete_task_button() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-task-btn";
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