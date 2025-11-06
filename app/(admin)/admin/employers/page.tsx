"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Mail, Globe, MapPin, Briefcase, Users, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function Employers() {
  const [searchQuery, setSearchQuery] = useState("");

  const employers = [
    {
      id: "1",
      name: "TechCorp Inc.",
      email: "hr@techcorp.com",
      website: "www.techcorp.com",
      location: "San Francisco, CA",
      industry: "Technology",
      size: "500-1000 employees",
      activeJobs: 12,
      totalApplications: 234,
      hired: 8,
      verified: true,
      joinedDate: "Jan 2024",
      logo: "🏢",
    },
    {
      id: "2",
      name: "Innovate Labs",
      email: "careers@innovatelabs.com",
      website: "www.innovatelabs.com",
      location: "New York, NY",
      industry: "Software",
      size: "100-500 employees",
      activeJobs: 8,
      totalApplications: 156,
      hired: 5,
      verified: true,
      joinedDate: "Feb 2024",
      logo: "💡",
    },
    {
      id: "3",
      name: "StartupXYZ",
      email: "jobs@startupxyz.com",
      website: "www.startupxyz.com",
      location: "Austin, TX",
      industry: "FinTech",
      size: "50-100 employees",
      activeJobs: 6,
      totalApplications: 123,
      hired: 4,
      verified: false,
      joinedDate: "Mar 2024",
      logo: "🚀",
    },
    {
      id: "4",
      name: "GrowthCo",
      email: "talent@growthco.com",
      website: "www.growthco.com",
      location: "Seattle, WA",
      industry: "Marketing",
      size: "200-500 employees",
      activeJobs: 5,
      totalApplications: 98,
      hired: 3,
      verified: true,
      joinedDate: "Jan 2024",
      logo: "📈",
    },
    {
      id: "5",
      name: "Digital Solutions",
      email: "hr@digitalsolutions.com",
      website: "www.digitalsolutions.com",
      location: "Remote",
      industry: "Consulting",
      size: "1000+ employees",
      activeJobs: 4,
      totalApplications: 87,
      hired: 2,
      verified: true,
      joinedDate: "Dec 2023",
      logo: "💻",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Employer Management
          </h1>
          <p className="text-muted-foreground">Manage company profiles and employer accounts</p>
        </div>
        <Button className="gradient-primary">
          <Users className="h-4 w-4 mr-2" />
          Add Employer
        </Button>
      </div>

      <Card className="shadow-card animate-fade-in" style={{ animationDelay: "100ms" }}>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search employers by name, industry, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {employers.map((employer, index) => (
          <Card
            key={employer.id}
            className="animate-fade-in shadow-card hover:shadow-card-hover transition-all duration-300"
            style={{ animationDelay: `${(index + 2) * 50}ms` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex gap-4 flex-1">
                  <div className="text-5xl">{employer.logo}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{employer.name}</CardTitle>
                      {employer.verified ? (
                        <Badge className="bg-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <XCircle className="h-3 w-3 mr-1" />
                          Unverified
                        </Badge>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{employer.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <span>{employer.website}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{employer.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{employer.size}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline">{employer.industry}</Badge>
                  <p className="text-sm text-muted-foreground mt-2">Joined {employer.joinedDate}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-2xl font-bold text-primary">{employer.activeJobs}</p>
                    <p className="text-sm text-muted-foreground">Active Jobs</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{employer.totalApplications}</p>
                    <p className="text-sm text-muted-foreground">Applications</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">{employer.hired}</p>
                    <p className="text-sm text-muted-foreground">Hired</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {!employer.verified && (
                    <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Verify
                    </Button>
                  )}
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/admin/employers/${employer.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}