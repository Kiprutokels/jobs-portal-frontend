"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

export default function Apply() {
  const { id } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  // Redirect if not logged in
  if (!user) {
    router.push(`/login?redirect=/jobs/${id}/apply`);
    return null;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted!",
        description: "We've received your application and will be in touch soon.",
      });
      setTimeout(() => router.push("/jobs"), 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-6">
            <Link href={`/jobs/${id}`} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Job Details
            </Link>
          </Button>

          {/* Application Form */}
          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
                  <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Job Application</CardTitle>
                  <CardDescription>Fill out the form below to apply for this position</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required placeholder="John" defaultValue={user.firstName} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required placeholder="Doe" defaultValue={user.lastName} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required placeholder="john.doe@example.com" defaultValue={user.email} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                    <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/johndoe" />
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="text-lg font-semibold">Professional Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Input id="experience" type="number" min="0" required placeholder="5" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter *</Label>
                    <Textarea 
                      id="coverLetter" 
                      required 
                      placeholder="Tell us why you're a great fit for this role..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV *</Label>
                    <div className="relative">
                      <Input 
                        id="resume" 
                        type="file" 
                        required 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="cursor-pointer"
                      />
                      {fileName && (
                        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                          <Upload className="h-4 w-4" />
                          <span>{fileName}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
                </div>

                {/* Additional Questions */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="text-lg font-semibold">Additional Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio Website (Optional)</Label>
                    <Input id="portfolio" type="url" placeholder="https://yourportfolio.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">When are you available to start? *</Label>
                    <Input id="availability" required placeholder="e.g., Immediately, 2 weeks notice, etc." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Expected Salary Range (Optional)</Label>
                    <Input id="salary" placeholder="e.g., $120k - $150k" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 flex gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg"
                    onClick={() => router.push(`/jobs/${id}`)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}