/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  HeaderApp,
  FooterApp,
  FilterSection,
  ListTodoApp,
} from "./components/UI";
import { Task } from "./Models/newTask";

const initialStateTodo = [
  new Task("Create css Todo", true),
  new Task("Create js Todo", true),
  new Task("Create html Todo"),
  new Task("Create react Todo"),
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState(initialStateTodo);
  const [todofilter, setTodosFilter] = useState(todos);

  const handlerCreateTodo = (title) => {
    const newTodo = new Task(title);
    setTodos([...todos, newTodo]);
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
    setTodosFilter(newTodos);
  };

  const handlerDeleteTodo = () => {
    const newTodoDelete = todos.filter(({ complete }) => complete !== true);
    setTodos(newTodoDelete);
    setTodosFilter(newTodoDelete);
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
      <div className=' bg-[url("./assets/images/bg-mobile-light.jpg")] dark:bg-[url("./assets/images/bg-mobile-dark.jpg")] md:bg-[url("./assets/images/bg-desktop-light.jpg")] md:dark:bg-[url("./assets/images/bg-desktop-dark.jpg")] bg-contain bg-slate-300 dark:bg-slate-900 bg-top-center bg-no-repeat min-h-screen relative'>
        <HeaderApp
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handlerCreateTodo={handlerCreateTodo}
        />
        <main className="container flex flex-col px-4 mx-auto">
          <ListTodoApp
            todos={todofilter}
            handlerUpdateTodo={handlerUpdateTodo}
            handlerDeleteTodo={handlerDeleteTodo}
          />
        </main>
        <FilterSection handlerFilterTodo={handlerFilterTodo} />
      </div>

      <FooterApp />
    </>
  );
}

export default App;
