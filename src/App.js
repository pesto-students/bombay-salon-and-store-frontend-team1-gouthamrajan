import { ToastContainer } from "react-toastify";
import RoutesArr from "./config/routes";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLosss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RoutesArr />
    </>
  );
}

export default App;
