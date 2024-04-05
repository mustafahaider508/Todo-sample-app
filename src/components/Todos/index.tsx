import { useState } from "react";
import Header from "../Layout/Header";
import Card from "./Card";
import AddTodos from "./AddTodo";
import { useAppSelector } from "../../store";

const Todo = () => {
  let [isOpen, setIsOpen] = useState<Boolean>(false);
  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="bg-yellow-50 pb-2 pr-1 relative">
        <Header />
        <Card />

        <div className=" flex  justify-end my-4 md:my-0 md:absolute bottom-10  right-10">
          <div
            onClick={openModal}
            className="w-10 h-10 md:w-16 md:h-16 border-2 flex items-center justify-center border-black cursor-pointer rounded-full  bg-pink-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="md:w-8 md:h-8 w-5 h-5"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
      <AddTodos isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Todo;
