/* eslint-disable react/prop-types */
import { ButtonText } from "./buttons/ButtonText";

export const FilterSection = ({ handlerFilterTodo }) => {
  return (
    <>
      <section className="container px-4 mx-auto mt-8 ">
        <div className="flex items-center justify-center gap-4 p-4 overflow-hidden bg-white rounded-md dark:bg-slate-700">
          <ButtonText onClick={handlerFilterTodo} buttonTextName="All" />
          <ButtonText onClick={handlerFilterTodo} buttonTextName="Active" />
          <ButtonText onClick={handlerFilterTodo} buttonTextName="Completed" />
        </div>
      </section>
    </>
  );
};
