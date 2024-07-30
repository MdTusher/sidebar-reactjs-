import { useGlobalContext } from "./context";

const Modal = () => {
  const { openModal, closeModalFn } = useGlobalContext();
  return (
    <div className={`${openModal ? "modal-overlay modal-show" : "hidden"}`}>
      <div className="w-96 h-80 bg-slate-200 p-6 flex justify-center items-center gap-6 flex-col rounded-xl shadow-lg">
        <h3 className="font-bold text-xl">Modal content</h3>
        <p className="text-center p-2 text-stone-700 border-2 border-blue-950 rounded-md bg-white scroll-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          expedita facilis, modi impedit adipisci voluptatibus nobis, possimus
          sit suscipit, doloribus cupiditate quibusdam aut fugit! Maiores!
        </p>
        <button
          className="shadow-lg px-4 py-2 font-semibold text-lg rounded-lg hover:bg-slate-300"
          onClick={closeModalFn}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
