"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Users,
  Building2,
  Settings,
  BarChart3,
  Shield,
  Tags,
  DollarSign,
  Mail,
} from "lucide-react";

export default function AdminNav() {
  const pathname = usePathname();

  const links = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/admin/analytics",
      label: "Analytics",
      icon: BarChart3,
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
      href: "/admin/candidates",
      label: "Candidates",
      icon: Users,
    },
    {
      href: "/admin/employers",
      label: "Employers",
      icon: Building2,
    },
    {
      href: "/admin/users",
      label: "Users",
      icon: Users,
    },
    {
      href: "/admin/moderation",
      label: "Moderation",
      icon: Shield,
    },
    {
      href: "/admin/categories",
      label: "Categories",
      icon: Tags,
    },
    {
      href: "/admin/monetization",
      label: "Monetization",
      icon: DollarSign,
    },
    {
      href: "/admin/communications",
      label: "Communications",
      icon: Mail,
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
        const isActive =
          pathname === link.href || pathname?.startsWith(link.href + "/");

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group",
              isActive
                ? "gradient-primary text-white shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            )}
          >
            <link.icon
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isActive ? "scale-110" : "group-hover:scale-110"
              )}
            />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
