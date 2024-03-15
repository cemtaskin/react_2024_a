import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "New Phone",
      amount: 99.67,
      date: new Date(2024, 1, 1),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 1, 1),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 80.0,
      date: new Date(2022, 5, 6),
    },
    {
      id: "e4",
      title: "Desk (Wooden)",
      amount: 120.67,
      date: new Date(2024, 3, 3),
    },
    {
      id: "e5",
      title: "Udemy Course",
      amount: 9.9,
      date: new Date(2012, 4, 4),
    },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
