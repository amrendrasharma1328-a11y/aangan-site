"use client";

import { useState } from "react";

const DEFAULT_MSG = "No spam. Only good updates.";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ text: DEFAULT_MSG, type: "" });

  async function onSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setMsg({ text: "", type: "" });

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setMsg({ text: data.message || "Thanks! We'll be in touch.", type: "ok" });
        setEmail("");
      } else {
        setMsg({ text: data.error || "Something went wrong. Please try again.", type: "err" });
      }
    } catch {
      setMsg({ text: "Network error. Please try again.", type: "err" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} noValidate>
        <input
          type="email"
          id="em"
          name="email"
          placeholder="Enter your email"
          aria-label="Email address"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "SAVING..." : "NOTIFY ME"}
        </button>
      </form>
      <p style={{ fontSize: 12, marginTop: 8 }} id="msg" className={msg.type} role="status" aria-live="polite">
        {msg.text}
      </p>
    </div>
  );
}
