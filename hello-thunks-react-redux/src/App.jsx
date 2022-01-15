import "./App.css";
import Navbar from "./Componants/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Componants/Dashboard";
import Login from "./Componants/Login";
import Register from "./Componants/Register";
import PrivateRoute from "./Componants/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
