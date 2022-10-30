import icon from "../../images/Enter_Expense.png";
export default function ExpensesPage() {
  return (
    <>
      <div class="left-column">
        <div class="inner-expense">
          <img src={icon} />
        </div>
      </div>
      <div class="right-column">
        <input></input>
      </div>
    </>
  );
}
