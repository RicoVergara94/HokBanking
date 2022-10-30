import Dashboard from "./components/Pages/Dashboard";
import BalanceView from "./components/BalanceView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./components/Pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <div className="App">
              <Dashboard />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
