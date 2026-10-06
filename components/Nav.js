"use client";

import { useState, useEffect } from "react";
import Socials from "@/components/Socials";

const LINKS = [
  ["HOME", "#"],
  ["ABOUT", "#about"],
  ["WHAT WE DO", "#what"],
  ["ARTISTS", "#"],
  ["PARTNERS", "#"],
  ["CONTACT", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Esc dabane par menu band
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // menu khula ho to peeche ka page scroll na ho
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={open ? "open" : ""}>
      <a className="logo" href="#" onClick={close}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="logoimg" src="/images/logo.webp" alt="Aangan logo" />
        INDIA&apos;S EXPERIENTIAL
        <br />
        ENTERTAINMENT COMPANY
      </a>

      <ul id="menu">
        {LINKS.map(([label, href]) => (
          <li key={label}>
            <a href={href} onClick={close}>{label}</a>
          </li>
        ))}
        <li className="menu-soc">
          <Socials />
        </li>
      </ul>

      <div className="navr">
        <span className="pill">COMING SOON</span>
        <Socials />
      </div>

      <button
        type="button"
        className="burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
