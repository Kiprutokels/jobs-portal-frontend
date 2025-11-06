"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import AdminNav from "@/components/AdminNav";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { ArrowLeft, Briefcase, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login?redirect=/admin/dashboard");
    } else if (user.role !== "admin") {
      router.push("/");
    }
  }, [user, router]);

  if (!user || user.role !== "admin") return null;

  return (
    <div className="min-h-screen bg-linear-to-br from-secondary/30 via-background to-secondary/20">
      {/* Admin Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="p-2 rounded-lg gradient-primary">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                    CareerHub
                  </span>
                  <span className="block text-xs text-muted-foreground">Admin Panel</span>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                  3
                </Badge>
              </Button>
              <ThemeToggle />
              <Button asChild variant="outline" size="sm">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Site
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card sticky top-24">
              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-1">Welcome back!</h3>
                <p className="text-sm text-muted-foreground">
                  {user.firstName} {user.lastName}
                </p>
              </div>
              <AdminNav />
            </div>
          </aside>

          {/* Main Content */}
          <main className="min-h-[calc(100vh-12rem)]">{children}</main>
        </div>
      </div>
    </div>
  );
}
