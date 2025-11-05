"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Eye, Mail, Phone, MapPin, Briefcase, GraduationCap, Filter } from "lucide-react";
import Link from "next/link";

export default function Candidates() {
  const [searchQuery, setSearchQuery] = useState("");

  const candidates = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      title: "Senior Frontend Developer",
      experience: "8 years",
      skills: ["React", "TypeScript", "Node.js", "GraphQL"],
      education: "BS Computer Science - Stanford",
      applications: 5,
      lastActive: "2 hours ago",
      resumeUrl: "/resumes/sarah-johnson.pdf",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      title: "Product Designer",
      experience: "6 years",
      skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
      education: "MFA Design - NYU",
      applications: 3,
      lastActive: "1 day ago",
      resumeUrl: "/resumes/michael-chen.pdf",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "+1 (555) 345-6789",
      location: "Austin, TX",
      title: "Marketing Manager",
      experience: "7 years",
      skills: ["SEO", "Content Strategy", "Analytics", "Social Media"],
      education: "MBA Marketing - UT Austin",
      applications: 4,
      lastActive: "3 hours ago",
      resumeUrl: "/resumes/emily-rodriguez.pdf",
    },
    {
      id: "4",
      name: "David Kim",
      email: "david.k@email.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      title: "Data Scientist",
      experience: "5 years",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      education: "MS Data Science - UW",
      applications: 6,
      lastActive: "5 hours ago",
      resumeUrl: "/resumes/david-kim.pdf",
    },
    {
      id: "5",
      name: "Jessica Martinez",
      email: "jessica.m@email.com",
      phone: "+1 (555) 567-8901",
      location: "Remote",
      title: "Full Stack Engineer",
      experience: "4 years",
      skills: ["JavaScript", "React", "Django", "PostgreSQL"],
      education: "BS Software Engineering - MIT",
      applications: 7,
      lastActive: "10 minutes ago",
      resumeUrl: "/resumes/jessica-martinez.pdf",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Candidate Database
          </h1>
          <p className="text-muted-foreground">Search and manage candidate profiles and CVs</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Database
        </Button>
      </div>

      <Card className="shadow-card animate-fade-in" style={{ animationDelay: "100ms" }}>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, skills, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Experience Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="lead">Lead/Principal</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="sf">San Francisco</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="austin">Austin</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {candidates.map((candidate, index) => (
          <Card
            key={candidate.id}
            className="animate-fade-in shadow-card hover:shadow-card-hover transition-all duration-300"
            style={{ animationDelay: `${(index + 2) * 50}ms` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-xl">{candidate.name}</CardTitle>
                    <Badge variant="secondary">{candidate.experience} experience</Badge>
                  </div>
                  <p className="text-base font-medium text-primary mb-3">{candidate.title}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{candidate.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{candidate.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{candidate.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>{candidate.education}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Last active</p>
                  <p className="text-sm font-medium">{candidate.lastActive}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, i) => (
                      <Badge key={i} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{candidate.applications} applications</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/candidates/${candidate.id}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        View Profile
                      </Link>
                    </Button>
                    <Button asChild variant="default" size="sm">
                      <a href={candidate.resumeUrl} download>
                        <Download className="h-4 w-4 mr-1" />
                        Download CV
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}