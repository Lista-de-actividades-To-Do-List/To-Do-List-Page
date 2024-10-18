const input = document.querySelector("input");
const add_task_btn = document.querySelector(".add-task-btn");
const tasks = document.querySelector(".container-task");
const _status = document.querySelector(".task-status-search");
const category = document.querySelector(".task-category-search");
const empty = document.querySelector(".empty");

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
