"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, FileText, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Jobs",
      value: "24",
      icon: Briefcase,
      change: "+3 this week",
      color: "text-primary",
    },
    {
      title: "Applications",
      value: "156",
      icon: FileText,
      change: "+12 today",
      color: "text-accent",
    },
    {
      title: "Active Candidates",
      value: "89",
      icon: Users,
      change: "+7 this week",
      color: "text-primary",
    },
    {
      title: "Success Rate",
      value: "95%",
      icon: TrendingUp,
      change: "+2% this month",
      color: "text-accent",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your recruitment activities</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border border-border rounded-lg">
              <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">New application received</p>
                <p className="text-sm text-muted-foreground">John Doe applied for Senior Frontend Developer</p>
              </div>
              <span className="text-sm text-muted-foreground">2 hours ago</span>
            </div>
            
            <div className="flex items-center gap-4 p-4 border border-border rounded-lg">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">New job posted</p>
                <p className="text-sm text-muted-foreground">UX/UI Designer position is now live</p>
              </div>
              <span className="text-sm text-muted-foreground">5 hours ago</span>
            </div>

            <div className="flex items-center gap-4 p-4 border border-border rounded-lg">
              <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">New candidate registered</p>
                <p className="text-sm text-muted-foreground">Jane Smith joined the platform</p>
              </div>
              <span className="text-sm text-muted-foreground">1 day ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
