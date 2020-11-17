function startTodo() {}

let todoCounter = 0;
function addTodo() {
  todoCounter++;
  const tableRowContent = `
<tr>
    <td>
        <label for="todo_text_${todoCounter}"> Todo ${todoCounter}</label>
        <input id="todo_text_${todoCounter}" type="text" value="mein erstes todo">
    </td>

    <td>
        <label for="todo_done_${todoCounter}">Todo Done ${todoCounter}</label>
        <input id="todo_done_${todoCounter}" type="checkbox" >
    </td>
</tr>`;

  document.getElementById("todoContainer").innerHTML += tableRowContent;
  document.getElementById("numberOfTasks").textContent = todoCounter;
  const checked = document.querySelectorAll("#todoContainer input:checked");
  document.getElementById("openTasks").textContent = todoCounter - checked.length;
}
