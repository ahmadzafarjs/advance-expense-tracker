export default function ValueView({ title, value }) {
  return (
    <div className="p-2 w-full h-40 rounded-xl hover:bg-priL transition-all">
      <div className="bg-amber-600 p-3 h-full w-full flex flex-col items-start justify-between rounded-lg">
        <h4 className="text-amber-100 uppercase text-sm leading-none text-background">
          {title}
        </h4>
        <h2 className="text-3xl text-amber-50 font-semibold leading-none">
          {value}
          <span className="text-xs text-stone-100 italic font-normal">Rs.</span>
        </h2>
      </div>
    </div>
  );
}
