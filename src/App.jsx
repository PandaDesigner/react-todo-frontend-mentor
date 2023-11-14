/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  HeaderApp,
  FooterApp,
  FilterSection,
  ListTodoApp,
} from "./components/UI";
import { Task } from "./Models/newTask";

const initialStateTodo = localStorage.todos
  ? JSON.parse(localStorage.todos)
  : [];
const inicalStateTheme = localStorage.theme === "dark";

function App() {
  const [darkMode, setDarkMode] = useState(inicalStateTheme);
  const [todos, setTodos] = useState(initialStateTodo);
  const [todofilter, setTodosFilter] = useState(todos);

  const handlerMode = () => setDarkMode(!darkMode);

  const handlerCreateTodo = (title) => {
    const newTodo = new Task(title);
    setTodos([...todos, newTodo]);
    setTodosFilter([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };
  const handlerUpdateTodo = (id, action = false) => {
    const newTodos = todos.map((todo) => {
      const { title, completed } = todo;
      if (todo.id === id) {
        return new Task(title, action);
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodosFilter(newTodos);
  };

  const handlerRevomeTodo = (id) => {
    const newTodoRemove = todos.filter((item) => item.id !== id);
    setTodos(newTodoRemove);
    localStorage.setItem("todos", JSON.stringify(newTodoRemove));
    setTodosFilter(todos);
  };

  const handlerDeleteTodo = () => {
    const newTodoDelete = todos.filter(({ complete }) => complete !== true);
    setTodos(newTodoDelete);
    localStorage.setItem("todos", JSON.stringify(newTodoDelete));
    setTodosFilter(todos);
  };

  const handlerFilterTodo = (e) => {
    const origenTodo = todos;
    const resultActive = origenTodo.filter(({ complete }) => complete !== true);
    const resultCompleted = origenTodo.filter(({ complete }) => complete);
    if (e.target.innerText === "All") setTodosFilter(origenTodo);
    if (e.target.innerText === "Active") setTodosFilter(resultActive);
    if (e.target.innerText === "Completed") setTodosFilter(resultCompleted);
  };

  return (
    <>
      <div className=' transition-colors duration-700 bg-[url("./assets/images/bg-mobile-light.jpg")] dark:bg-[url("./assets/images/bg-mobile-dark.jpg")] md:bg-[url("./assets/images/bg-desktop-light.jpg")] md:dark:bg-[url("./assets/images/bg-desktop-dark.jpg")] bg-contain bg-slate-300 dark:bg-slate-900 bg-top-center bg-no-repeat min-h-screen  relative'>
        <HeaderApp
          handlerMode={handlerMode}
          darkMode={darkMode}
          handlerCreateTodo={handlerCreateTodo}
        />
        <main className="container flex flex-col px-4 mx-auto">
          <ListTodoApp
            todos={todofilter}
            handlerUpdateTodo={handlerUpdateTodo}
            handlerDeleteTodo={handlerDeleteTodo}
            handlerRevomeTodo={handlerRevomeTodo}
          />
        </main>
        <FilterSection handlerFilterTodo={handlerFilterTodo} />
      </div>
      <FooterApp />
    </>
  );
}

export default App;
