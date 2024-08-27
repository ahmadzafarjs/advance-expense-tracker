import Estimated from "../components/Estimated";
import EstimatedExpense from "../components/EstimatedExpense";
import ValueAddingForm from "../components/ValueAddingForm";

export default function ExpensesPage({ state, dispatch }) {
  return (
    <>
      <EstimatedExpense dispatch={dispatch} />
      <Estimated estimateDetails={state.estimateDetails} />
    </>
  );
}
