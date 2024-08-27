import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ValueAddingForm from "./components/ValueAddingForm";
import GlobalLayout from "./layout/GlobalLayout";
import HomePage from "./pages/HomePage";
import ExpensesPage from "./pages/ExpensesPage";

const initialState = {
  currentBalance: 999,
  loan: 0,
  loanDetails: [],
  estimate: 0,
  estimateDetails: [],
  expenses: 0,
  borrow: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addCurrentBalance":
      return {
        ...state,
        currentBalance: Number(state.currentBalance) + Number(action.payload),
      };
    case "requestLoan":
      return (
        state.currentBalance >= 1000 && {
          ...state,
          loan: Number(state.loan) + Number(action.payload.balance),
          currentBalance:
            Number(state.currentBalance) + Number(action.payload.balance),
          loanDetails: [
            ...state.loanDetails,
            {
              amount: Number(action.payload.balance),
              for: action.payload.balanceFor,
              source: action.payload.source,
            },
          ],
        }
      );
    case "addExpense":
      return {
        ...state,
        currentBalance: Number(state.currentBalance) - Number(action.payload),
        expenses: Number(state.expenses) + Number(action.payload),
      };
    case "addExpenseDetails":
      return {
        ...state,
        estimate: Number(state.estimate) + Number(action.payload.amount),
        estimateDetails: [
          ...state.estimateDetails,
          {
            ...action.payload,
            // expense: action.payload.title,
            // amount: action.payload.amount,
          },
        ],
      };
    default:
      console.log("Undefined action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <section className="md:max-w-[600px] max-w-[90vw] m-auto">
    //   {/* Expenses */}
    //   <div className="grid grid-cols-2">
    //     <ValueView title="Current" value={currentBalance} />
    //     <ValueView title="Loan" value={loan} />
    //     <ValueView title="Estimate" value={estimate} />
    //     <ValueView title="Expenses" value={expenses} />
    //   </div>
    //   {/* Add Money Form */}
    //   <ValueAddingForm
    //     dispatch={dispatch}
    //     currentBalance={currentBalance}
    //     loan={loan}
    //     expenses={expenses}
    //   />
    //   {/* Estimated Expense */}
    //   <EstimatedExpense dispatch={dispatch} />
    //   <Estimated estimateDetails={estimateDetails} />
    // </section>
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route index element={<HomePage state={state} />} />
          <Route
            path="/add"
            element={<ValueAddingForm state={state} dispatch={dispatch} />}
          />
          <Route
            path="/estimated"
            element={<ExpensesPage state={state} dispatch={dispatch} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
