import Estimated from "../components/Estimated";
import ValueView from "../components/ValueView";

export default function HomePage({ state }) {
  const { currentBalance, loan, estimate, expenses, estimateDetails } = state;
  return (
    <>
      <div className="grid grid-cols-2 mb-3">
        <ValueView title="Current" value={currentBalance} />
        <ValueView title="Loan" value={loan} />
        <ValueView title="Estimate" value={estimate} />
        <ValueView title="Expenses" value={expenses} />
      </div>
      <Estimated estimateDetails={estimateDetails} />
    </>
  );
}
