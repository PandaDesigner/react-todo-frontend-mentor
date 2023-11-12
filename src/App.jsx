import { useState } from "react";
import { HeaderApp } from "./components/UI/HeaderApp";
import { ItemList } from "./components/itemList/ItemList";
import { ButtonText } from "./components/UI/buttons/ButtonText";

const arrayRepit = new Array(5).fill(0);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className=' bg-[url("./assets/images/bg-mobile-light.jpg")] dark:bg-[url("./assets/images/bg-mobile-dark.jpg")] md:bg-[url("./assets/images/bg-desktop-light.jpg")] md:dark:bg-[url("./assets/images/bg-desktop-dark.jpg")] bg-contain bg-slate-300 dark:bg-slate-900 bg-top-center bg-no-repeat min-h-screen relative'>
        <HeaderApp darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container flex flex-col px-4 mx-auto">
          <section className="flex flex-col overflow-hidden bg-white rounded-md dark:bg-slate-700">
            {
              // eslint-disable-next-line no-unused-vars
              arrayRepit.map((item, i) => (
                <ItemList key={i} />
              ))
            }
            <section className="flex p-4 align-middle text-slate-600 dark:text-slate-400">
              <span className="grow">
                <span className="dark:text-slate-100">{arrayRepit.length}</span>{" "}
                item left
              </span>
              <ButtonText buttonTextName="Clear completed" />
            </section>
          </section>
        </main>
        <section className="container px-4 mx-auto mt-8 ">
          <div className="flex items-center justify-center gap-4 p-4 overflow-hidden bg-white rounded-md dark:bg-slate-700">
            <ButtonText buttonTextName="All" />
            <ButtonText buttonTextName="Active" />
            <ButtonText buttonTextName="Completed" />
          </div>
        </section>
       
      </div>
      <footer className="sticky bottom-0 z-10 w-full p-4 px-4 mx-auto containe bg-slate-300 dark:bg-slate-900 sticky-bottom">
          <p className="text-center text-slate-500/80">
            Drag and drop to reorder list
          </p>
        </footer>
    </>
  );
}

export default App;
