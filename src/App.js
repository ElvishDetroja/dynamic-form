import "./App.css";
import { Routes, Route } from "react-router-dom";
import Owner from "./pages/owner";
import Customer from "./pages/customer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Owner />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </>
  );
}

export default App;
