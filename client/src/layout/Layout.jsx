import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <main className="w-screen h-dvh bg-gray-50">
        <Outlet />
      </main>
    </>
  );
}
