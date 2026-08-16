"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BarChart3,
  ChevronRight,
  KeyRound,
  LayoutDashboard,
  LogOut,
  MoreVertical,
  Settings,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

const baseItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/apikeys", label: "API Keys", icon: KeyRound },
  { href: "/dashboard/usage", label: "Usage", icon: BarChart3 },
  { href: "/dashboard/profile", label: "Profile", icon: UserRound },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function DashboardShell({ children, profile }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isAdmin = ["owner", "enterprise"].includes(profile?.role);

  const items = isAdmin
    ? [...baseItems, { href: "/admin", label: "Admin Panel", icon: ShieldCheck, accent: true }]
    : baseItems;

  const nav = (mobile = false) => (
    <nav className={mobile ? "grid gap-1" : "grid gap-1 text-sm"}>
      {items.map(({ href, label, icon: Icon, accent }) => {
        const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(`${href}/`));
        return (
          <Link
            key={href}
            href={href}
            onClick={() => mobile && setOpen(false)}
            className={`group flex items-center justify-between rounded-xl px-3 py-3 transition ${
              active
                ? "bg-white/[0.08] text-white ring-1 ring-white/10"
                : accent
                  ? "text-violet-300 hover:bg-white/[0.05]"
                  : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            <span className="flex items-center gap-3">
              <span className={`icon-box h-9 w-9 ${active ? "bg-violet-500/15" : "bg-white/[0.04]"}`}>
                <Icon size={16} />
              </span>
              <span>{label}</span>
            </span>
            <ChevronRight size={15} className="text-zinc-600 transition group-hover:text-zinc-300" />
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/65 px-4 py-3 backdrop-blur-xl sm:px-5 sm:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <Link href="/home" className="flex items-center gap-2 text-lg font-black tracking-tight sm:text-xl">
            <span className="icon-box h-9 w-9 bg-violet-500/10 text-violet-300">A</span>
            ArchanaAPI
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden max-w-44 truncate text-sm text-zinc-400 sm:block">
              {profile?.username || profile?.email || "Developer"}
            </span>
            <Link href="/logout" className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-300 hover:bg-red-500/10 sm:flex">
              <LogOut size={15} />
              Logout
            </Link>

            <button
              type="button"
              aria-label={open ? "Tutup menu" : "Buka menu dashboard"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="icon-box h-10 w-10 border border-white/10 bg-white/[0.04] text-zinc-200 hover:bg-white/[0.08] sm:hidden"
            >
              {open ? <X size={19} /> : <MoreVertical size={19} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mx-auto mt-3 max-w-7xl sm:hidden">
            <div className="glass-premium rounded-2xl p-2 shadow-2xl shadow-black/30">
              {nav(true)}
              <div className="my-2 border-t border-white/10" />
              <Link
                href="/logout"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-red-300 hover:bg-red-500/10"
              >
                <span className="icon-box h-9 w-9 bg-red-500/10">
                  <LogOut size={16} />
                </span>
                Logout
              </Link>
            </div>
          </div>
        )}
      </header>

      <div className="mx-auto grid max-w-7xl gap-5 p-4 sm:p-5 md:grid-cols-[220px_1fr]">
        <aside className="hidden h-fit md:block">
          <div className="glass-premium rounded-2xl p-2">{nav()}</div>
        </aside>
        <section className="min-w-0">{children}</section>
      </div>
    </div>
  );
}
