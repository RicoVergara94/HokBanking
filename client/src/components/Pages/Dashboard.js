import BalanceIcon from "../icons/BalanceIcon";
import BalanceView from "../BalanceView";
import ExpensesIcon from "../icons/ExpensesIcon";
import CheckingsIcon from "../icons/CheckingsIcon";
import SavingsIcon from "../icons/SavingsIcon";

import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Test from "./Test";
import ExpensesPage from "./ExpensesPage";

export default function Dashboard() {
  return (
    <>
      <h1 id="dashboard-header"> Dashboard </h1>
      <div id="dashboard-container">
        <div class="dashboard">
          Dashboard
          <div class="left-column">
            <div class="icon">
              <BalanceIcon />
              <div class="icon-text">Balance</div>
            </div>
            <div class="icon">
              <CheckingsIcon />
              <div class="icon-text">Checkings</div>
            </div>
            <div class="icon">
              <SavingsIcon />
              <div class="icon-text">Savings</div>
            </div>
            <Link to="/Expenses">
              <div class="icon">
                <ExpensesIcon />
                <div class="icon-text">Expenses</div>
              </div>
            </Link>
          </div>
          <div class="right-column">
            <BalanceView />
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/Expenses" element={<ExpensesPage />} />
      </Routes>
    </>
  );
}
