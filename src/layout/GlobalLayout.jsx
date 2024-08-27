import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function GlobalLayout() {
  return (
    <main className="md:max-w-[600px] max-w-[90vw] m-auto">
      <Header />
      <Outlet />
    </main>
  );
}
