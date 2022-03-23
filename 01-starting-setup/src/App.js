import ExpenseItem from "./components/ExpenseItem";
import "./components/Expenses.css";
function App() {
  const expenseItems = [
    {
      title: "Car Insurance",
      price: 284.34,
      expenseDate: new Date(23, 2, 2021),
    },
    {
      title: "Bike Insurance",
      price: 284.34,
      expenseDate: new Date(23, 2, 2022),
    },
    {
      title: "HouseHoldItems",
      price: 84.34,
      expenseDate: new Date(23, 2, 2021),
    },
  ];
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenseItems[0].title}
        price={expenseItems[0].price}
        expenseDate={expenseItems[0].expenseDate}
      />
      <ExpenseItem
        title={expenseItems[1].title}
        price={expenseItems[1].price}
        expenseDate={expenseItems[1].expenseDate}
      />
      <ExpenseItem
        title={expenseItems[2].title}
        price={expenseItems[2].price}
        expenseDate={expenseItems[2].expenseDate}
      />
    </div>
  );
}

export default App;
