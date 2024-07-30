import { useGlobalContext } from "./context";
import sideList from "./data";

const Sidebar = () => {
  const { openSidebar, closeSidebarFn } = useGlobalContext();
  return (
    <aside className={`${openSidebar ? "sidebar " : "hidden"}`}>
      <div className="mx-2 flex justify-between p-2 text-xl font-bold">
        <h3>Sidebar</h3>
        <button
          onClick={closeSidebarFn}
          className="font-semibold hover:text-red-800"
        >
          X
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {sideList.map((listItem) => {
          return (
            <li
              className="text-center capitalize p-2 cursor-pointer hover:bg-slate-300"
              key={listItem.id}
            >
              {listItem.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
