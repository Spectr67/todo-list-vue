<script>
    export default {
      data() {
        return {
          task: {
            message: '',
            checked: false,
          },
          taskList: [],
        }
      },

      methods: {
        addTask() {
          const elUlTaskList = document.querySelector('#taskList')
          const elLi = document.createElement('li')
          const elInput = document.createElement('input')
          const elSpan = document.createElement('span')
          const elButton = document.createElement('button')
          elInput.type = 'checkbox'
          elInput.classList.add('checkbox')
          elSpan.classList.add('task-text')
          elSpan.textContent = this.task.message
          elButton.classList.add('deleteButton')
          elButton.textContent = 'Удалить'
          elLi.appendChild(elInput)
          elLi.appendChild(elSpan)
          elLi.appendChild(elButton)
          elUlTaskList.appendChild(elLi)
          elButton.addEventListener('click', () => {
            elUlTaskList.removeChild(elLi)
          })
        },
      },
    }
    <!-- const modelTodo = {
    todos: [],

    addTask(text) {
      if (text === '') {
        return
      }
      const task = {
        text: text,
        completed: false,
      }
      this.todos.push(task)
      this.saveTodo()
    },

    removeTask(text) {
      console.log("privet")
      // for (const todo of this.todos) {
      //   if (todo.text === text) {
      //     todo.deleted = true
      //   }
      // }
      this.todos = this.todos.filter(todo => todo.text !== text)
      this.saveTodo()
    },

    toggleTask(text, isCompleted) {
      for (const todo of this.todos) {
        if (todo.text === text) {
          todo.completed = isCompleted
        }
      }
      this.saveTodo()
    },

    saveTodo() {
      writeToDo(this.todos)

    },

    loadTodos() {
      this.todos = loadFromStorage()
    },
  } -->
</script>

<template>
  <div class="container">
    <h1>Список задач</h1>
    <div>
      <input type="text" id="taskInput" placeholder="Введите задачу" />
      <button @click="addTask" id="addTaskButton">Добавить задачу</button>
    </div>
    <ul id="taskList">
      <li class="completed">
        <input type="checkbox" class="checkbox" /><span class="task-text"
          >foo</span
        ><button class="deleteButton">Удалить</button>
      </li>
      <li>
        <input type="checkbox" class="checkbox" /><span class="task-text"
          >bar</span
        ><button class="deleteButton">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  .container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  h1 {
    margin-bottom: 20px;
    color: #333;
  }
  #taskInput {
    width: calc(100% - 50px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  #addTaskButton {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  #addTaskButton:hover {
    background-color: #0056b3;
  }
  #taskList {
    list-style-type: none;
    padding: 0;
  }
  #taskList li {
    background: #f9f9f9;
    margin: 5px 0;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  .checkbox {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    width: 20px;
    height: 20px;
  }
  .task-text {
    display: inline-block;
    margin-left: 40px;
    width: calc(100% - 110px);
    vertical-align: middle;
  }
  .deleteButton {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
  .deleteButton:hover {
    background-color: #c82333;
  }
  #taskList .completed {
    background-color: #d4edda;
    text-decoration: none;
    color: #155724;
  }
</style>
