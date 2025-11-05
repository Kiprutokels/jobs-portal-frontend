"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  TrendingUp,
  Users,
  Briefcase,
  DollarSign,
  Target,
  Activity,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Analytics() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,500",
      icon: DollarSign,
      change: "+12.5% from last month",
      changeType: "positive" as const,
      iconColor: "text-green-600",
    },
    {
      title: "Job Views",
      value: "45,231",
      icon: Activity,
      change: "+8.2% from last week",
      changeType: "positive" as const,
      iconColor: "text-blue-600",
    },
    {
      title: "Application Rate",
      value: "23.4%",
      icon: Target,
      change: "+2.1% improvement",
      changeType: "positive" as const,
      iconColor: "text-purple-600",
    },
    {
      title: "Avg. Response Time",
      value: "2.3 days",
      icon: Calendar,
      change: "-0.5 days improved",
      changeType: "positive" as const,
      iconColor: "text-orange-600",
    },
  ];

  const topJobs = [
    { title: "Senior Frontend Developer", views: 1234, applications: 89, conversionRate: "7.2%" },
    { title: "Product Manager", views: 987, applications: 76, conversionRate: "7.7%" },
    { title: "UX Designer", views: 856, applications: 54, conversionRate: "6.3%" },
    { title: "Backend Engineer", views: 743, applications: 48, conversionRate: "6.5%" },
    { title: "Data Scientist", views: 621, applications: 41, conversionRate: "6.6%" },
  ];

  const topEmployers = [
    { name: "TechCorp Inc.", jobs: 12, applications: 234, hired: 8 },
    { name: "Innovate Labs", jobs: 8, applications: 156, hired: 5 },
    { name: "StartupXYZ", jobs: 6, applications: 123, hired: 4 },
    { name: "GrowthCo", jobs: 5, applications: 98, hired: 3 },
    { name: "Digital Solutions", jobs: 4, applications: 87, hired: 2 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Analytics & Insights
          </h1>
          <p className="text-muted-foreground">Track performance metrics and trends</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export Report</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 50} />
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Top Performing Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topJobs.map((job, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm">{job.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {job.views} views • {job.applications} applications
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">{job.conversionRate}</p>
                        <p className="text-xs text-muted-foreground">conversion</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Top Employers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topEmployers.map((employer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm">{employer.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {employer.jobs} jobs • {employer.applications} applications
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-blue-600">{employer.hired} hired</p>
                        <p className="text-xs text-muted-foreground">success</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Growth Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Chart visualization would go here</p>
                  <p className="text-sm">(Integration with chart library)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Job Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Briefcase className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Job performance charts would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>User Growth Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>User growth charts would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center text-muted-foreground">
                  <DollarSign className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Revenue charts would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}