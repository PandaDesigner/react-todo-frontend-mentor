/* eslint-disable react/prop-types */

import { ItemList } from "../itemList/ItemList";
import { ButtonText } from "./buttons/ButtonText";

export const ListTodoApp = ({
  todos,
  handlerUpdateTodo,
  handlerDeleteTodo,
  handlerRevomeTodo,
}) => {
  return (
    <>
      <section className="flex flex-col overflow-hidden bg-white rounded-md dark:bg-slate-700">
        {todos.map(({ id, ...resProps }) => (
          <ItemList
            key={id}
            id={id}
            {...resProps}
            handlerUpdateTodo={handlerUpdateTodo}
            handlerRevomeTodo={handlerRevomeTodo}
          />
        ))}
        <section className="flex p-4 align-middle text-slate-600 dark:text-slate-400">
          <span className="grow">
            <span className="dark:text-slate-100">{todos.length}</span> item
            left
          </span>
          <ButtonText
            buttonTextName="Clear completed"
            onClick={handlerDeleteTodo}
          />
        </section>
      </section>
    </>
  );
};
