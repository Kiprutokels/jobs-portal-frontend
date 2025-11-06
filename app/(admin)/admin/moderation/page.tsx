"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, AlertCircle, Eye, Briefcase, Building2 } from "lucide-react";

export default function Moderation() {
  const pendingJobs = [
    {
      id: "1",
      title: "Senior Backend Engineer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$120k - $160k",
      postedDate: "2 hours ago",
      reason: "New job posting",
    },
    {
      id: "2",
      title: "Marketing Specialist",
      company: "GrowthCo",
      location: "Austin, TX",
      salary: "$80k - $100k",
      postedDate: "5 hours ago",
      reason: "New job posting",
    },
    {
      id: "3",
      title: "Product Designer",
      company: "DesignHub",
      location: "San Francisco, CA",
      salary: "$110k - $140k",
      postedDate: "1 day ago",
      reason: "Flagged content",
    },
  ];

  const pendingCompanies = [
    {
      id: "1",
      name: "Tech Innovations Ltd",
      website: "www.techinnovations.com",
      industry: "Software Development",
      size: "50-100 employees",
      submittedDate: "3 hours ago",
      reason: "New company registration",
    },
    {
      id: "2",
      name: "Future Finance Corp",
      website: "www.futurefinance.com",
      industry: "FinTech",
      size: "200-500 employees",
      submittedDate: "1 day ago",
      reason: "New company registration",
    },
  ];

  const reportedContent = [
    {
      id: "1",
      type: "Job",
      title: "Suspicious Job Offer",
      reporter: "user@example.com",
      reason: "Potential scam - asking for payment",
      reportedDate: "4 hours ago",
    },
    {
      id: "2",
      type: "Profile",
      title: "Fake Company Profile",
      reporter: "admin@system.com",
      reason: "Company doesn't exist",
      reportedDate: "6 hours ago",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Content Moderation
        </h1>
        <p className="text-muted-foreground">Review and approve pending content</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 animate-fade-in" style={{ animationDelay: "100ms" }}>
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">{pendingJobs.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{pendingCompanies.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Awaiting verification</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Reported Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">{reportedContent.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Needs review</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="jobs" className="space-y-6">
        <TabsList>
          <TabsTrigger value="jobs">Pending Jobs</TabsTrigger>
          <TabsTrigger value="companies">Pending Companies</TabsTrigger>
          <TabsTrigger value="reports">Reported Content</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="space-y-4">
          {pendingJobs.map((job, index) => (
            <Card key={job.id} className="shadow-card animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <Badge variant="secondary">{job.reason}</Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Company: {job.company}</p>
                      <p>Location: {job.location}</p>
                      <p>Salary: {job.salary}</p>
                      <p>Posted: {job.postedDate}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Review
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button variant="destructive" size="sm">
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="companies" className="space-y-4">
          {pendingCompanies.map((company, index) => (
            <Card key={company.id} className="shadow-card animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">{company.name}</h3>
                      <Badge variant="secondary">{company.reason}</Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Website: {company.website}</p>
                      <p>Industry: {company.industry}</p>
                      <p>Size: {company.size}</p>
                      <p>Submitted: {company.submittedDate}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Review
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Verify
                    </Button>
                    <Button variant="destructive" size="sm">
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          {reportedContent.map((report, index) => (
            <Card key={report.id} className="shadow-card animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <h3 className="font-semibold text-lg">{report.title}</h3>
                      <Badge variant="destructive">{report.type}</Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Reporter: {report.reporter}</p>
                      <p>Reason: {report.reason}</p>
                      <p>Reported: {report.reportedDate}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Investigate
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Dismiss
                    </Button>
                    <Button variant="destructive" size="sm">
                      Take Action
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}