"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Briefcase, FileText, Settings } from "lucide-react";

export default function AdminNav() {
  const pathname = usePathname();

  const links = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/admin/jobs",
      label: "Jobs",
      icon: Briefcase,
    },
    {
      href: "/admin/applications",
      label: "Applications",
      icon: FileText,
    },
    {
      href: "/admin/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <nav className="space-y-1">
      {links.map((link) => {
        const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm",
              isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary text-foreground"
            )}
          >
            <link.icon className="h-4 w-4" />
            <span className="font-medium">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
