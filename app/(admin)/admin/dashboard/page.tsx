"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import {
  Briefcase,
  Users,
  FileText,
  TrendingUp,
  Building2,
  UserCheck,
  Clock,
  CheckCircle,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Jobs",
      value: "247",
      icon: Briefcase,
      change: "+12 this week",
      changeType: "positive" as const,
      iconColor: "text-primary",
    },
    {
      title: "Active Applications",
      value: "1,284",
      icon: FileText,
      change: "+18% from last month",
      changeType: "positive" as const,
      iconColor: "text-accent",
    },
    {
      title: "Registered Candidates",
      value: "3,429",
      icon: Users,
      change: "+127 this month",
      changeType: "positive" as const,
      iconColor: "text-primary",
    },
    {
      title: "Active Employers",
      value: "156",
      icon: Building2,
      change: "+8 this week",
      changeType: "positive" as const,
      iconColor: "text-accent",
    },
    {
      title: "Success Rate",
      value: "94.5%",
      icon: TrendingUp,
      change: "+2.3% this quarter",
      changeType: "positive" as const,
      iconColor: "text-green-600",
    },
    {
      title: "Avg. Time to Hire",
      value: "14 days",
      icon: Clock,
      change: "-2 days improved",
      changeType: "positive" as const,
      iconColor: "text-blue-600",
    },
    {
      title: "Interviews Scheduled",
      value: "89",
      icon: UserCheck,
      change: "+23 this week",
      changeType: "positive" as const,
      iconColor: "text-purple-600",
    },
    {
      title: "Jobs Filled",
      value: "143",
      icon: CheckCircle,
      change: "+31 this month",
      changeType: "positive" as const,
      iconColor: "text-green-600",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "application",
      title: "New application received",
      description: "John Doe applied for Senior Frontend Developer",
      time: "2 hours ago",
      icon: FileText,
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      id: 2,
      type: "job",
      title: "New job posted",
      description: "TechCorp Inc. posted UX/UI Designer position",
      time: "5 hours ago",
      icon: Briefcase,
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: 3,
      type: "candidate",
      title: "New candidate registered",
      description: "Jane Smith completed profile setup",
      time: "1 day ago",
      icon: Users,
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      id: 4,
      type: "employer",
      title: "Employer verified",
      description: "Innovate Labs successfully verified",
      time: "1 day ago",
      icon: Building2,
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
  ];

  const moderationQueue = [
    { id: 1, type: "Job Posting", title: "Senior Backend Engineer", company: "StartupXYZ", status: "pending" },
    { id: 2, type: "Company Profile", title: "Tech Innovations Ltd", company: "-", status: "pending" },
    { id: 3, type: "Job Posting", title: "Marketing Manager", company: "GrowthCo", status: "pending" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your job portal today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 50} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card className="animate-fade-in shadow-card" style={{ animationDelay: "400ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Activity</span>
              <Button asChild variant="ghost" size="sm">
                <Link href="/admin/analytics">View All</Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                >
                  <div className={`h-10 w-10 rounded-full ${activity.iconBg} flex items-center justify-center shrink-0`}>
                    <activity.icon className={`h-5 w-5 ${activity.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Moderation Queue */}
        <Card className="animate-fade-in shadow-card" style={{ animationDelay: "450ms" }}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Moderation Queue</span>
              <Badge className="bg-accent">3 Pending</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {moderationQueue.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>
                    <p className="font-medium text-sm">{item.title}</p>
                    {item.company !== "-" && (
                      <p className="text-xs text-muted-foreground">{item.company}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700">
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive">
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
              <Button asChild variant="outline" className="w-full">
                <Link href="/admin/moderation">View All Pending Items</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="animate-fade-in shadow-card" style={{ animationDelay: "500ms" }}>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button asChild className="h-auto py-4 flex-col gap-2">
              <Link href="/admin/jobs/new">
                <Briefcase className="h-5 w-5" />
                <span>Post New Job</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
              <Link href="/admin/candidates">
                <Users className="h-5 w-5" />
                <span>View Candidates</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
              <Link href="/admin/employers">
                <Building2 className="h-5 w-5" />
                <span>Manage Employers</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
              <Link href="/admin/communications">
                <Mail className="h-5 w-5" />
                <span>Send Newsletter</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}