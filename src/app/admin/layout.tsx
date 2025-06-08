import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-zinc-950 text-white">
      <aside className="w-64 bg-zinc-900 p-6 space-y-6">
        <div className="text-2xl font-bold">🛠 Admin</div>
        <nav className="space-y-3">
          <Link href="/admin" className="block hover:text-indigo-400">Dashboard</Link>
          <Link href="/admin/messages" className="block hover:text-indigo-400">Messages</Link>
          {/* Future: Add templates, user feedback, etc */}
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
