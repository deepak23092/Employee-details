import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Details from './components/Details'
import EmployeeState from "./context/employees/EmployeeState"

function App() {
  return (
    <>
      <EmployeeState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Registration />} />
            <Route exact path="/Registration" element={<Registration />} />
            <Route exact path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </EmployeeState>
    </>
  );
}

export default App;
