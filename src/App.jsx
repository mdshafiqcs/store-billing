import { useSelector } from "react-redux";
import { AuthPage, HomePage } from "./pages/index.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <> {
      isLoggedIn ? <HomePage /> : <AuthPage />
    }

      <ToastContainer />
    </>
  )
}

export default App
