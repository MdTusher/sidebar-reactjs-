import { useState, useContext, createContext } from "react";
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const AppContext = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const openModalFn = () => setOpenModal(true);
  const closeModalFn = () => setOpenModal(false);
  const openSidebarFn = () => setOpenSidebar(true);
  const closeSidebarFn = () => setOpenSidebar(false);

  return (
    <GlobalContext.Provider
      value={{
        openSidebar,
        openSidebarFn,
        closeSidebarFn,
        openModal,
        openModalFn,
        closeModalFn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
