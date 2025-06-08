"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function AdminMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/contact");

        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }

        if (!res.ok)
          throw new Error("Unauthorized or error fetching messages.");

        const data = await res.json();
        setMessages(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "Failed to fetch messages.");
        } else {
          setError("Unknown error occurred.");
        }
      }
    };

    fetchMessages();
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <>
      <Head>
        <title>Admin Messages – Esaaka</title>
        <meta
          name="description"
          content="View and manage contact form messages."
        />
      </Head>
      <div className="min-h-screen bg-zinc-950 text-white p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">📬 Contact Messages</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
          >
            Logout
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {messages.length === 0 && !error && (
          <p className="text-zinc-400">No messages yet.</p>
        )}

        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-zinc-900 border border-zinc-700 rounded-lg p-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{msg.name}</p>
                  <p className="text-sm text-zinc-400">{msg.email}</p>
                </div>
                <p className="text-sm text-zinc-400">
                  {new Date(msg.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="mt-2">
                {expandedId === msg.id ? (
                  <p className="text-zinc-200 whitespace-pre-wrap">
                    {msg.message}
                  </p>
                ) : (
                  <p className="text-zinc-400 truncate">{msg.message}</p>
                )}
              </div>

              <button
                onClick={() =>
                  setExpandedId(expandedId === msg.id ? null : msg.id)
                }
                className="mt-2 text-indigo-400 hover:underline text-sm"
              >
                {expandedId === msg.id
                  ? "Hide full message"
                  : "View full message"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
