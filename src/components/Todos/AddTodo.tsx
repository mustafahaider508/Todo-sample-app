import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { addTodos } from "../../store/reducer/todoSlice";
import { useAppDispatch } from "../../store";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean | undefined | any;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
};

export default function AddTodos({ isOpen, setIsOpen }: Props) {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);

  const handelSubmit = () => {
    if (todo !== "") {
      let data = {
        id: uuidv4(),
        title: todo,
        isCompleted: false,
      };
      dispatch(addTodos(data));
      setTodo("");
      closeModal();
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[380px] border-2 border-black transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add a new Todo
                  </Dialog.Title>
                  <div className="mt-2 flex items-center  gap-2 w-full">
                    <input
                      className="w-full border-b-2 outline-none text-[13px]"
                      type="text"
                      placeholder="Todo"
                      name="todo"
                      value={todo}
                      onChange={(e: any) => setTodo(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        handelSubmit();
                      }}
                      className="border-2 border-black rounded-md w-[50px] text-[14px] bg-[#33eaff] font-[600] "
                    >
                      Add
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-500 text-[12px]">Please Add Todo*</p>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
