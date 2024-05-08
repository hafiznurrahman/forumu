import { Outlet, ScrollRestoration } from "react-router-dom";
import Toggle from "../components/Toggle.jsx"

export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <main className="w-screen h-dvh bg-gray-50">
        <Outlet />
        <Toggle />
      </main>
    </>
  );
}
