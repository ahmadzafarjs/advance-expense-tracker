import { useState } from "react";

const unitsOfMeasurement = [
  // Weight units
  "kg", // Kilogram
  "g", // Gram
  "mg", // Milligram
  "lb", // Pound
  "oz", // Ounce
  "ton", // Ton

  // Length/Distance units
  "m", // Meter
  "cm", // Centimeter
  "mm", // Millimeter
  "km", // Kilometer
  "in", // Inch
  "ft", // Foot
  "yd", // Yard
  "mi", // Mile

  // Volume units
  "l", // Liter
  "ml", // Milliliter
  "gal", // Gallon
  "qt", // Quart
  "pt", // Pint
  "fl oz", // Fluid Ounce
  "cup", // Cup

  // Area units
  "sq m", // Square Meter
  "sq cm", // Square Centimeter
  "sq mm", // Square Millimeter
  "sq km", // Square Kilometer
  "sq in", // Square Inch
  "sq ft", // Square Foot
  "sq yd", // Square Yard
  "acre", // Acre
  "hectare", // Hectare

  // Temperature units
  "C", // Celsius
  "F", // Fahrenheit
  "K", // Kelvin

  // Time units
  "s", // Second
  "min", // Minute
  "h", // Hour
  "day", // Day
];

export default function EstimatedExpense({ dispatch }) {
  const [expense, setExpense] = useState({
    expense: "",
    amount: "",
    unit: "",
    quantity: "",
  });

  function handleAddExpense(e) {
    e.preventDefault();
    setExpense({
      expense: "",
      amount: "",
      unit: "",
      quantity: "",
    });
    console.log(expense);
    dispatch({ type: "addExpenseDetails", payload: expense });
  }

  return (
    <form className="my-4 bg-stone-100 p-4 rounded-lg">
      <h3 className="text-lg text-amber-600">Add Expense</h3>
      <input
        className="p-2 leading-none text-lg w-full bg-stone-200 rounded-md disabled:bg-red-100 mt-2"
        type="text"
        placeholder={"Expense"}
        value={expense.expense}
        onChange={(e) => setExpense({ ...expense, expense: e.target.value })}
      />
      <input
        className="p-2 leading-none text-lg w-full bg-stone-200 rounded-md disabled:bg-red-100 mt-2"
        type="number"
        placeholder={"Amount"}
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
      />
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <select
          className="bg-stone-200 mt-2 p-2 rounded-md"
          onChange={(e) => setExpense({ ...expense, unit: e.target.value })}
        >
          <option>unit</option>
          {unitsOfMeasurement.map((u) => {
            return (
              <option key={u} value={u}>
                {u}
              </option>
            );
          })}
        </select>
        <input
          className="p-2 leading-none text-lg w-full bg-stone-200 rounded-md disabled:bg-red-100 mt-2"
          type="number"
          placeholder={"Quantity"}
          value={expense.quantity}
          onChange={(e) => setExpense({ ...expense, quantity: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="mt-2 capitalize bg-amber-600 text-stone-100 leading-none py-3 px-4 rounded-lg"
        onClick={handleAddExpense}
      >
        Add Expense
      </button>
    </form>
  );
}
