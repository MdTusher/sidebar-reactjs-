import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebarFn, openSidebar, openModalFn } = useGlobalContext();
  return (
    <main className="h-svh flex justify-center items-center">
      <button
        onClick={openSidebarFn}
        className={`${openSidebar ? "hidden" : " fixed top-2 left-4 btn"}`}
      >
        Open Sidebar
      </button>
      <button onClick={openModalFn} className=" inline-block btn">
        Open Modal
      </button>
    </main>
  );
};

export default Home;
