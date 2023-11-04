/* eslint-disable react/prop-types */
import { MoonIcon, SunIcon } from "../icons";

export const HeaderApp = ({ darkMode, setDarkMode }) => {
  const handlerMode = () => setDarkMode(!darkMode);
  return (
    <>
      <header className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-8 text-white">
          <h1 className="uppercase text-2xl tracking-[.25em] font-bold">
            Todo
          </h1>
          <button onClick={() => handlerMode()}>
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
        <form className="flex items-center justify-center gap-2 p-4 mb-4 overflow-hidden bg-white rounded-md dark:bg-slate-700">
          <span className="inline-block w-5 h-5 border-2 border-gray-300 rounded-full"></span>
          <input
            className="w-full text-gray-400 outline-none dark:bg-slate-700"
            type="text"
            placeholder="Create a new Task..."
          />
        </form>
      </header>
    </>
  );
};
