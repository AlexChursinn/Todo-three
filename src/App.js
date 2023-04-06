import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { FireBaseState } from "./context/firebase/FirebaseState";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <FireBaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FireBaseState>
  );
}

export default App;
