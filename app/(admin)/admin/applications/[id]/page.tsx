"use client";

import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, FileText, Calendar } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function ApplicationDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [status, setStatus] = useState("pending");
  const [notes, setNotes] = useState("");

  const application = {
    id: "1",
    candidateName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    appliedDate: "2024-01-15",
    status: "pending",
    resumeUrl: "/resumes/john-doe.pdf",
    coverLetter: "I am writing to express my strong interest in the Senior Frontend Developer position at TechCorp Inc. With over 8 years of experience in modern web development and a proven track record of delivering high-quality applications, I am confident in my ability to contribute to your team.\n\nMy expertise includes React, TypeScript, Next.js, and modern CSS frameworks. I have successfully led multiple projects from conception to deployment, always focusing on performance, accessibility, and user experience.",
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "StartupXYZ",
        period: "2020 - Present",
        description: "Led frontend development for a SaaS platform serving 50k+ users",
      },
      {
        title: "Frontend Developer",
        company: "Digital Agency",
        period: "2016 - 2020",
        description: "Developed responsive web applications for various clients",
      },
    ],
    education: [
      {
        degree: "BS Computer Science",
        institution: "Stanford University",
        year: "2016",
      },
    ],
    skills: ["React", "TypeScript", "Next.js", "Node.js", "GraphQL", "TailwindCSS"],
    portfolio: "https://johndoe.dev",
  };

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    toast({
      title: "Status Updated",
      description: `Application status changed to ${newStatus}`,
    });
  };

  const handleSaveNotes = () => {
    toast({
      title: "Notes Saved",
      description: "Your notes have been saved successfully",
    });
  };

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
    <div className="space-y-6">
      <div className="flex items-center justify-between animate-fade-in">
        <div>
          <Button asChild variant="ghost" size="sm" className="mb-2">
            <Link href="/admin/applications">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Applications
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Application Details</h1>
        </div>
        <Badge className={`${getStatusColor(status)} text-base px-4 py-1`}>
          {status}
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Candidate Info */}
          <Card className="shadow-card animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Candidate Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{application.candidateName}</h2>
                <div className="grid gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${application.email}`} className="hover:text-primary">
                      {application.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${application.phone}`} className="hover:text-primary">
                      {application.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{application.location}</span>
                  </div>
                  {application.portfolio && (
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <a href={application.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        View Portfolio
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold mb-2">Applied For</h3>
                <p className="text-lg font-medium text-primary">{application.jobTitle}</p>
                <p className="text-sm text-muted-foreground">{application.company}</p>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {application.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cover Letter */}
          <Card className="shadow-card animate-fade-in" style={{ animationDelay: "150ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Cover Letter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm whitespace-pre-line leading-relaxed">{application.coverLetter}</p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="shadow-card animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {application.experience.map((exp, index) => (
                <div key={index} className={index !== 0 ? "pt-4 border-t border-border" : ""}>
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-sm">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="shadow-card animate-fade-in" style={{ animationDelay: "250ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {application.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="shadow-card animate-fade-in sticky top-24" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Application Status</Label>
                <Select value={status} onValueChange={handleStatusChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="reviewed">Reviewed</SelectItem>
                    <SelectItem value="shortlisted">Shortlisted</SelectItem>
                    <SelectItem value="interview">Interview Scheduled</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button asChild className="w-full gradient-primary">
                <a href={application.resumeUrl} download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <a href={`mailto:${application.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Email Candidate
                </a>
              </Button>

              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card className="shadow-card animate-fade-in" style={{ animationDelay: "350ms" }}>
            <CardHeader>
              <CardTitle>Internal Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Textarea
                  placeholder="Add notes about this candidate..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>
              <Button onClick={handleSaveNotes} className="w-full">
                Save Notes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}