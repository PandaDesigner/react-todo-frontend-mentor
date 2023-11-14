/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { MoonIcon, SunIcon } from "../icons";
import { CheckIcon } from "../icons/CheckIcon";
import { handlerChackChange } from "../../../handlers";
import { useEffect, useState } from "react";

export const HeaderApp = ({ handlerCreateTodo, handlerMode, darkMode }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    darkMode
      ? (document.documentElement.classList.add("dark"),
        (localStorage.theme = "dark"))
      : (document.documentElement.classList.remove("dark"),
        (localStorage.theme = "ligth"));
  }, [darkMode]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }
    handlerCreateTodo(title);
    setTitle("");
  };

  return (
    <>
      <header className="container max-w-3xl px-4 mx-auto transition-colors duration-300">
        <div className="flex items-center justify-between py-8 text-white transition-colors duration-500 sm:py-16 md:py-24">
          <h1 className="uppercase text-xl sm:text-3xl md:text-6xl tracking-[.25em] font-bold">
            Todo
          </h1>
          <button onClick={() => handlerMode()}>
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
        <form
          onSubmit={handlerSubmit}
          className="flex items-center justify-center gap-2 p-4 mx-auto mb-4 overflow-hidden transition-colors duration-300 bg-white rounded-md dark:bg-slate-700 "
        >
          <span
            type="button"
            className={` transition-colors duration-300 inline-block w-5 h-5 px-1 text-center border border-gray-300 rounded-full`}
          ></span>
          <input
            className="w-full text-gray-400 transition-colors duration-300 outline-none tra nsition-colors dark:bg-slate-700"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            name="titleTask"
            value={title}
            placeholder="Create a new Task..."
          />
        </form>
      </header>
    </>
  );
};
