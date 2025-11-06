"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, CheckCircle, Mail, Globe, MapPin, Users, Briefcase, FileText, Calendar } from "lucide-react";
import Link from "next/link";

export default function EmployerDetails() {
  const { id } = useParams();

  const employer = {
    id: "1",
    name: "TechCorp Inc.",
    email: "hr@techcorp.com",
    website: "www.techcorp.com",
    location: "San Francisco, CA",
    industry: "Technology",
    size: "500-1000 employees",
    verified: true,
    joinedDate: "Jan 15, 2024",
    logo: "🏢",
    description: "Leading technology company specializing in innovative software solutions. We're committed to building products that make a difference.",
    socialLinks: {
      linkedin: "linkedin.com/company/techcorp",
      twitter: "twitter.com/techcorp",
    },
  };

  const jobs = [
    { id: "1", title: "Senior Frontend Developer", status: "active", applications: 23, posted: "2 days ago" },
    { id: "2", title: "Backend Engineer", status: "active", applications: 18, posted: "1 week ago" },
    { id: "3", title: "Product Manager", status: "closed", applications: 45, posted: "2 weeks ago" },
  ];

  const stats = [
    { label: "Total Jobs Posted", value: "12", color: "text-primary" },
    { label: "Active Jobs", value: "8", color: "text-green-600" },
    { label: "Total Applications", value: "234", color: "text-blue-600" },
    { label: "Successful Hires", value: "8", color: "text-purple-600" },
  ];

  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <Button asChild variant="ghost" size="sm" className="mb-2">
          <Link href="/admin/employers">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Employers
          </Link>
        </Button>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="text-6xl">{employer.logo}</div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{employer.name}</h1>
                {employer.verified && (
                  <Badge className="bg-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>{employer.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <a href={`https://${employer.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    {employer.website}
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{employer.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-card">
            <CardContent className="pt-6">
              <p className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">About</h3>
                <p className="text-sm text-muted-foreground">{employer.description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Industry</h3>
                  <Badge variant="secondary">{employer.industry}</Badge>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Company Size</h3>
                  <Badge variant="secondary">{employer.size}</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Social Links</h3>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={`https://${employer.socialLinks.linkedin}`} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={`https://${employer.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </Button>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {employer.joinedDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <Badge className={job.status === "active" ? "bg-green-600" : "bg-gray-600"}>
                        {job.status}
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{job.applications} applications</span>
                      <span>Posted {job.posted}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/admin/jobs/${job.id}/edit`}>View Job</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg border border-border">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Posted new job</p>
                    <p className="text-sm text-muted-foreground">Senior Frontend Developer</p>
                    <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg border border-border">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Hired candidate</p>
                    <p className="text-sm text-muted-foreground">Product Manager position filled</p>
                    <p className="text-xs text-muted-foreground mt-1">5 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}