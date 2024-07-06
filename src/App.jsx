import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Gift from "./Pages/Gift";
import { useState } from "react"
import { AuthContext } from "./AuthContext";
import RequireAuth from "./component/RequireAuth";

export default function App() { 
  const [token, setToken] = useState(null);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/Login" />
          <Route 
            element={
              <RequireAuth>
                <Gift />
              </RequireAuth>
            }
            path="/Gift" 
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}