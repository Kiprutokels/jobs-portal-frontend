"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Search, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AdminApplications() {
  const [searchQuery, setSearchQuery] = useState("");

  const applications = [
    {
      id: "1",
      candidateName: "John Doe",
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      appliedDate: "2024-01-15",
      status: "pending",
      resumeUrl: "/resumes/john-doe.pdf",
    },
    {
      id: "2",
      candidateName: "Jane Smith",
      jobTitle: "UX/UI Designer",
      company: "DesignHub",
      email: "jane.smith@example.com",
      phone: "+1 (555) 234-5678",
      appliedDate: "2024-01-14",
      status: "reviewed",
      resumeUrl: "/resumes/jane-smith.pdf",
    },
    {
      id: "3",
      candidateName: "Mike Johnson",
      jobTitle: "Marketing Manager",
      company: "GrowthCo",
      email: "mike.j@example.com",
      phone: "+1 (555) 345-6789",
      appliedDate: "2024-01-13",
      status: "shortlisted",
      resumeUrl: "/resumes/mike-johnson.pdf",
    },
    {
      id: "4",
      candidateName: "Sarah Williams",
      jobTitle: "Backend Engineer",
      company: "TechCorp Inc.",
      email: "sarah.w@example.com",
      phone: "+1 (555) 456-7890",
      appliedDate: "2024-01-12",
      status: "interview",
      resumeUrl: "/resumes/sarah-williams.pdf",
    },
    {
      id: "5",
      candidateName: "David Chen",
      jobTitle: "Product Manager",
      company: "Innovate Labs",
      email: "david.c@example.com",
      phone: "+1 (555) 567-8901",
      appliedDate: "2024-01-11",
      status: "accepted",
      resumeUrl: "/resumes/david-chen.pdf",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500";
      case "reviewed":
        return "bg-blue-500";
      case "shortlisted":
        return "bg-purple-500";
      case "interview":
        return "bg-indigo-500";
      case "accepted":
        return "bg-green-500";
      case "rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Applications
        </h1>
        <p className="text-muted-foreground">Manage and review all candidate applications</p>
      </div>

      {/* Filters */}
      <Card className="shadow-card animate-fade-in" style={{ animationDelay: "100ms" }}>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by candidate name, job title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="shortlisted">Shortlisted</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <div className="grid gap-6">
        {applications.map((app, index) => (
          <Card
            key={app.id}
            className="animate-fade-in shadow-card hover:shadow-card-hover transition-all duration-300"
            style={{ animationDelay: `${(index + 2) * 50}ms` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-xl">{app.candidateName}</CardTitle>
                    <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{app.email}</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm">
                    <span className="font-medium text-primary">{app.jobTitle}</span>
                    <span className="hidden md:inline text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{app.company}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Applied</p>
                  <p className="text-sm font-medium">{new Date(app.appliedDate).toLocaleDateString()}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{app.phone}</p>
                <Button asChild size="sm">
                  <Link href={`/admin/applications/${app.id}`}>
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}