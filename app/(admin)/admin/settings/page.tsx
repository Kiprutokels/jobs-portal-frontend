"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Globe, FileText, Mail } from "lucide-react";
import Link from "next/link";

export default function Settings() {
  const settingsCategories = [
    {
      title: "Site Configuration",
      description: "Manage site name, logo, and global settings",
      icon: Globe,
      href: "/admin/settings/site",
      color: "text-blue-600",
    },
    {
      title: "Content Management",
      description: "Edit static pages and manage blog content",
      icon: FileText,
      href: "/admin/settings/content",
      color: "text-purple-600",
    },
    {
      title: "Email Configuration",
      description: "Configure email templates and settings",
      icon: Mail,
      href: "/admin/settings/email",
      color: "text-green-600",
    },
    {
      title: "Job Configuration",
      description: "Manage categories, locations, and job settings",
      icon: SettingsIcon,
      href: "/admin/settings/config",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-muted-foreground">Configure your job portal settings</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {settingsCategories.map((category, index) => (
          <Card
            key={index}
            className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-secondary ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href={category.href}>
                  Configure
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}