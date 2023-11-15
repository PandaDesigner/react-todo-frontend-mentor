/* eslint-disable react/prop-types */
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { ItemList } from "../itemList/ItemList";
import { ButtonText } from "./buttons/ButtonText";

export const ListTodoApp = ({
  todos,
  handlerUpdateTodo,
  handlerDeleteTodo,
  handlerRevomeTodo,
  handlerDragEnd,
}) => {
  return (
    <>
      <section className="flex flex-col overflow-hidden transition-all duration-500 bg-white rounded-md dark:bg-slate-700">
        <DragDropContext onDragEnd={handlerDragEnd}>
          <Droppable droppableId="dropTido">
            {(droppableProvider) => (
              <div
                ref={droppableProvider.innerRef}
                {...droppableProvider.droppableProps}
              >
                {todos.map(({ id, ...resProps }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(draggableProvider) => (
                      <ItemList
                        ref={draggableProvider.innerRef}
                        {...draggableProvider.draggableProps}
                        {...draggableProvider.dragHandleProps}
                        id={id}
                        {...resProps}
                        handlerUpdateTodo={handlerUpdateTodo}
                        handlerRevomeTodo={handlerRevomeTodo}
                      />
                    )}
                  </Draggable>
                ))}
                {droppableProvider.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <section className="flex p-4 align-middle transition-colors duration-500 text-slate-600 dark:text-slate-400">
          <span className="grow">
            <span className="dark:text-slate-100">
              {todos.filter((item) => !item.complete).length}
            </span>{" "}
            item left
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
