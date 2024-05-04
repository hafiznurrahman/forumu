import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center flex flex-col items-center justify-center h-screen p-3">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-4">
        Maaf, halaman yang Anda cari tidak dapat ditemukan.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Kembali ke halaman utama
      </Link>
    </div>
  );
}
