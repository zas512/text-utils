import React, { useState } from "react";

export default function Navbar() {
  const [text, settext] = useState('Light Mode')
  const [icon, seticon] = useState('fa-sun-o')
  return (
    <nav className="w-full bg-light1 py-4 flex dark:bg-dark1">
      <div className="w-[75%] mx-auto flex">
        <div className="flex justify-start grow items-center">
          <p className="text-lg inline-block whitespace-nowrap uppercase text-textD dark:text-textL font-bold cursor-default">
            Modify your text easily !
          </p>
        </div>
        <div className="flex justify-end grow items-center">
          <button className="sm:w-[150px] w-[50px] bg-light2 dark:bg-dark2 hover:bg-light3 hover:dark:bg-dark3  text-textD dark:text-textL font-semibold py-2 px-4 border shadow-lg border-borderColor dark:border-borderColorL rounded" onClick={() => {
            if (document.body.classList.contains('dark')) {
              document.body.classList.remove('dark')
              document.body.classList.remove('bg-dark3')
              document.body.classList.add('bg-light3')
              settext('Light Mode')
              seticon('fa-sun-o')
              
            }
            else {
              document.body.classList.add('dark')
              document.body.classList.remove('bg-light3')
              document.body.classList.add('bg-dark3')
              settext('Dark Mode')
              seticon('fa-moon-o')
            }
          }}>
            <p>
              <i className={`fa ${icon} sm:mr-2 m-0`}></i> <span className="hidden sm:inline"> {text} </span>
           </p>
          </button>
        </div>
      </div>
    </nav>
  );
}
