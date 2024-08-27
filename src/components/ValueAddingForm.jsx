import { useState } from "react";

let statusBtnStyles = `p-2 rounded-md bg-stone-200 text-sm text-stone-600 text-center hover:bg-stone-300 cursor-pointer`;

export default function ValueAddingForm({ state, dispatch }) {
  const [balance, setBalance] = useState(0);
  const [balanceFor, setBalanceFor] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState({
    name: "",
    styles: "",
  });
  const { currentBalance, loan } = state;

  function handleAddingCurrentBalance(e) {
    e.preventDefault();
    switch (status.name) {
      case "add balance":
        setBalance(0);
        return dispatch({ type: "addCurrentBalance", payload: balance });
      case "request loan":
        setBalance(0);
        setSource("");
        setBalanceFor("");
        return dispatch({
          type: "requestLoan",
          payload: { balance, source, balanceFor },
        });
      case "add expense":
        setBalance(0);
        return dispatch({ type: "addExpense", payload: balance });
    }
  }

  function handleChangeStatus(name) {
    switch (name) {
      case "add balance":
        return setStatus({
          ...status,
          name: "add balance",
          styles: "bg-green-200 text-sm py-1 px-2 rounded-full text-stone-800",
        });
      case "request loan":
        return setStatus({
          ...status,
          name: "request loan",
          styles: "bg-red-200 text-sm py-1 px-2 rounded-full text-stone-800",
        });
      case "add expense":
        return setStatus({
          ...status,
          name: "add expense",
          styles:
            "bg-violet-200  text-sm py-1 px-2 rounded-full text-stone-800",
        });
      default:
        setStatus({
          name: "",
          styles: "",
        });
    }
  }

  return (
    <div className="bg-stone-100 p-4 rounded-xl">
      <h3 className="text-lg text-textM font-semibold">Add your balance.</h3>
      <div className="grid grid-cols-3 gap-2 my-4">
        {["add balance", "request loan", "add expense"].map((btn) => {
          return (
            <span
              onClick={() => handleChangeStatus(btn)}
              key={btn}
              className={statusBtnStyles}
            >
              {btn}
            </span>
          );
        })}
      </div>

      {status.name && (
        <form>
          <input
            disabled={currentBalance < 1000 && status.name === "request loan"}
            className="p-2 leading-none text-lg w-full bg-stone-200 rounded-md disabled:hidden"
            type="number"
            placeholder={"Enter value"}
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
          {status.name === "request loan" && (
            <input
              disabled={currentBalance < 1000 && status.name === "request loan"}
              className="p-2 leading-none text-lg w-full bg-stone-200 rounded-md disabled:hidden mt-2"
              type="text"
              placeholder={"Enter source"}
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          )}
          {status.name === "request loan" && (
            <input
              disabled={currentBalance < 1000 && status.name === "request loan"}
              className="p-2 leading-none text-lg w-full bg-stone-200 rounded-md disabled:hidden mt-2"
              type="text"
              placeholder={"Loan for"}
              value={balanceFor}
              onChange={(e) => setBalanceFor(e.target.value)}
            />
          )}

          <p className="text-sm text-stone-500 italic my-2 flex items-center justify-between">
            <span>
              {balance === 0
                ? `Current balance: ${currentBalance}`
                : `Balance after: ${status.name === "add balance" || status.name === "request loan" ? Number(currentBalance) + Number(balance) : Number(currentBalance) - Number(balance)} `}
            </span>

            <span className={status.styles}>{status.name}</span>
          </p>

          {currentBalance < 1000 && status.name === "request loan" && (
            <p className="text-sm text-stone-500 italic my-2 flex items-center justify-between">
              Balance must be 1000 rs for loan request.
            </p>
          )}

          <button
            type="submit"
            onClick={handleAddingCurrentBalance}
            className="capitalize bg-amber-600 text-stone-100 leading-none py-3 px-4 rounded-lg"
          >
            {status.name}
          </button>
        </form>
      )}
    </div>
  );
}
