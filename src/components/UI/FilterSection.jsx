/* eslint-disable react/prop-types */
import { ButtonText } from "./buttons/ButtonText";

export const FilterSection = ({ handlerFilterTodo }) => {
  return (
    <>
      <section className="container sticky max-w-3xl px-4 pt-2 pb-8 mx-auto mt-6 transition-colors duration-700 sm:mt-24 sm:pt-8 sm:relative bg-slate-300 dark:bg-slate-900 bottom-6">
        <div className="flex items-center justify-center gap-4 p-4 overflow-hidden transition-colors duration-700 bg-white rounded-md dark:bg-slate-700">
          <ButtonText onClick={handlerFilterTodo} buttonTextName="All" />
          <ButtonText onClick={handlerFilterTodo} buttonTextName="Active" />
          <ButtonText onClick={handlerFilterTodo} buttonTextName="Completed" />
        </div>
      </section>
    </>
  );
};
