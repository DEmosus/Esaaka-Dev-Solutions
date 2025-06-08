import Link from "next/link";

export const metadata = {
  title: "Admin Dashboard – Esaaka",
  description: "Access admin tools and manage submissions.",
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="text-zinc-400">Welcome to your admin control panel.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/admin/messages" className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition">
          <h2 className="text-lg font-semibold">📩 Contact Messages</h2>
          <p className="text-zinc-400 text-sm mt-1">View and manage form submissions.</p>
        </Link>
      </div>
    </div>
  );
}
