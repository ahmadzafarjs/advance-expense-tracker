import { Link } from "react-router-dom";

const navigation = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "add",
    path: "/add",
  },
  {
    name: "pay",
    path: "/pay",
  },
  {
    name: "estimated",
    path: "/estimated",
  },
  {
    name: "borrow",
    path: "/borrow",
  },
];

export default function Header() {
  return (
    <header className=" mb-4 pb-4 transition-all">
      <h3 className="text-center py-4 text-xl text-amber-700 font-thin">
        Daily Task Manager.
      </h3>
      <nav className="grid grid-cols-3 place-items-center gap-3 md:flex md:items-center md:justify-center ">
        {navigation.map((nav, i) => {
          return (
            <Link
              to={nav.path}
              className="uppercase text-md text-stone-600 bg-amber-100 hover:opacity-80 w-full text-center leading-none py-3 rounded-lg"
              key={i}
            >
              {nav.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
