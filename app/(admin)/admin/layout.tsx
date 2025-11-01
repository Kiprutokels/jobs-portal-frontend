"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import AdminNav from "@/components/AdminNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";

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
    <div className="min-h-screen bg-secondary/30">
      {/* Admin Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center space-x-2">
                <Briefcase className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">CareerHub</span>
              </Link>
              <span className="text-sm text-muted-foreground">Admin Panel</span>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Site
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Navigation</h3>
              <AdminNav />
            </div>
          </aside>

          {/* Main Content */}
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
