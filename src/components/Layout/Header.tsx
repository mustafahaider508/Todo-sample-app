import { useAppSelector } from "../../store";

function Header() {
  const { todos } = useAppSelector((state: any) => state.todoSlice);
  return (
    <div>
      <div className="w-full flex items-start   bg-[#33eaff] py-[15px] px-4 rounded-md border-2 border-black  box-shadow">
        <p className="font-[600]">{todos?.length} todos Pending</p>
      </div>
    </div>
  );
}

export default Header;
