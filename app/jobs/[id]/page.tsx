"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Building2, Calendar, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function JobDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  // Sample job data
  const job = {
    id: id || "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    department: "Engineering",
    postedDate: "2 days ago",
    description: "We're looking for an experienced frontend developer to join our growing team and help build amazing user experiences. You'll work on cutting-edge web applications using modern technologies and best practices.",
    responsibilities: [
      "Build and maintain high-quality web applications using React and TypeScript",
      "Collaborate with designers and backend engineers to create seamless user experiences",
      "Write clean, maintainable, and well-tested code",
      "Participate in code reviews and mentor junior developers",
      "Stay up-to-date with the latest frontend technologies and best practices",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in React, TypeScript, and modern CSS",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Familiarity with testing frameworks (Jest, React Testing Library)",
      "Excellent communication and teamwork skills",
      "Bachelor's degree in Computer Science or equivalent experience",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching",
      "Flexible work arrangements",
      "Professional development budget",
      "Generous PTO and parental leave",
    ],
  };

  const handleApplyClick = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login or register to apply for this job.",
        variant: "destructive",
      });
      router.push(`/login?redirect=/jobs/${id}`);
    } else {
      router.push(`/jobs/${id}/apply`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/jobs" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Jobs
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job Header */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-3xl">{job.title}</CardTitle>
                      <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <Building2 className="h-5 w-5" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-sm">{job.department}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Description */}
              <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle>About the Role</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>

              {/* Responsibilities */}
              <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <CardTitle>Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-accent font-bold">✓</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 animate-fade-in" style={{ animationDelay: '500ms' }}>
                <CardHeader>
                  <CardTitle>Apply for this position</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Ready to join our team? Click below to submit your application.
                  </p>
                  <Button 
                    onClick={handleApplyClick}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" 
                    size="lg"
                  >
                    Apply Now
                  </Button>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2">Share this job</h4>
                    <p className="text-xs text-muted-foreground">
                      Know someone who would be perfect for this role? Share it with them!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
