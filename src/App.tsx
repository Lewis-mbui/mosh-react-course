// import Form from "./components/Form";
import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Coffee", amount: 3.5, category: "Food" },
    { id: 2, description: "Groceries", amount: 45.0, category: "Food" },
    { id: 3, description: "Bus Ticket", amount: 2.75, category: "Transport" },
    { id: 4, description: "Movie", amount: 12.0, category: "Entertainment" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
