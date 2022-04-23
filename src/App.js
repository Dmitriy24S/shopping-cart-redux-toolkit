import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal/Modal";
import { useSelector } from "react-redux";

function App() {
  const { isModalOpen } = useSelector((store) => store.modal);
  return (
    <>
      {isModalOpen && <Modal />}
      <Header />
      <Cart />
    </>
  );
}
export default App;
