/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { CrossIcon } from "../icons/CrossIcon";

export const ItemList = ({
  title,
  complete,
  id,
  handlerUpdateTodo,
  handlerRevomeTodo,
}) => {
  const handlerActive = () => {
    handlerUpdateTodo(id, !complete);
  };

  return (
    <article className="flex items-center justify-center gap-2 px-4 py-4 transition-all duration-500 border-b border-b-slate-300">
      <button
        onClick={() => handlerActive()}
        className={` flex items-center transition-all duration-300 justify-center w-5 h-5 px-1 text-center border border-gray-300 rounded-full ${
          complete
            ? "bg-gradient-to-r from-[rgba(226,95,241,1)] to-[rgba(149,242,254,1)]"
            : ""
        } hover:border-indigo-500`}
      >
        {complete && <CheckIcon />}
      </button>
      <p
        className={`text-sm grow text-slate-400 transition-all duration-200 ${
          complete && "text-indigo-900 line-through dark:text-indigo-300"
        }`}
      >
        {title}
      </p>
      <button onClick={() => handlerRevomeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};
