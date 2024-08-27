import { CircleCheck, Trash } from "lucide-react";

export default function Estimated({ estimateDetails }) {
  return (
    <div>
      {estimateDetails.length > 0 && (
        <h3 className="my-2 text-lg">Estimated Expenses</h3>
      )}
      <ul className="flex flex-col gap-3 items-center justify-center">
        {estimateDetails.length === 0 && (
          <p className="text-center text-lg text-stone-600 italic">
            No estimated expense found.
          </p>
        )}
        {estimateDetails.length > 0 &&
          estimateDetails.map((est) => {
            return (
              <li
                key={est.amount}
                className="w-full grid grid-cols-[auto_1fr_auto_auto_auto] gap-2 items-center bg-stone-200 leading-none p-4 rounded-xl"
              >
                <button>
                  <CircleCheck className="w-8 h-8 text-green-800" />
                </button>
                <h4 className="px-2 leading-5 text-lg text-stone-700">
                  {est.expense}
                </h4>
                <p className="">
                  <span className="text-xs text-stone-500">{est.unit}.</span>
                  <br />
                  <span className="text-sm text-stone-700">{est.quantity}</span>
                </p>
                <p className="relative font-semibold text-lg px-4 italic text-amber-800">
                  {est.amount}{" "}
                  <span className="text-xs text-stone-500">Rs.</span>
                </p>
                <button className="text-end">
                  <Trash className="w-5 h-5 text-red-800" />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
