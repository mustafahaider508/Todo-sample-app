import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { removeTodos } from "../../store/reducer/todoSlice";

function Card() {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state: any) => state.todoSlice);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(todos.length).fill(false)
  );

  const handleChecked = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="w-full  flex items-center justify-center mt-[50px]">
      <div className="border-2 rounded-[15px] border-black w-[400px] h-auto md:h-[680px] overflow-y-scroll  p-4 bg-white">
        <p className="font-[600] text-[18px]">Pending Todos</p>
        {todos?.map((ele: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between px-6 mt-4"
          >
            <div className="flex gap-6 items-center">
              <div
                onClick={() => handleChecked(index)}
                className={`h-[17px] w-[17px] rounded-[4px]  border-2 border-black lg:cursor-pointer ${
                  checkedItems[index]
                    ? "bg-yellow-50 duration-700 box-shadow-checkbox"
                    : "bg-white duration-700"
                }    flex 
                 items-center justify-center pt-[2px] px-[1px]`}
              >
                {checkedItems[index] && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="black"
                    className="w-6 h-6 rotate-30 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 4 10-13.5"
                    />
                  </svg>
                )}
              </div>

              <p className="font-[500]">{ele?.title}</p>
            </div>

            <svg
              onClick={() => dispatch(removeTodos(ele.id))}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 font-[600] cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
