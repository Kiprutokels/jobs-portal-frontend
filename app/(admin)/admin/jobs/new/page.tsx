"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { jobConfiguration } from "@/lib/jobConfig";

export default function NewJob() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    category: "",
    type: "",
    experienceLevel: "",
    location: "",
    salaryType: "range",
    salaryMin: 0,
    salaryMax: 0,
    specificSalary: 0,
    status: "draft",
    description: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatSalaryDisplay = () => {
    switch (formData.salaryType) {
      case 'range':
        if (formData.salaryMin > 0 && formData.salaryMax > 0) {
          return `$${(formData.salaryMin / 1000).toFixed(0)}k - $${(formData.salaryMax / 1000).toFixed(0)}k`;
        }
        return 'Not set';
      case 'specific':
        return formData.specificSalary > 0 ? `$${(formData.specificSalary / 1000).toFixed(0)}k` : 'Not set';
      case 'negotiable':
        return 'Negotiable';
      case 'not-disclosed':
        return 'Competitive';
      default:
        return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent, publishNow: boolean = false) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalStatus = publishNow ? 'active' : formData.status;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: publishNow ? "Job Published!" : "Job Saved!",
        description: publishNow 
          ? "Your job listing is now live and accepting applications." 
          : "Your job has been saved as a draft.",
      });
      router.push("/admin/jobs");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <Button asChild variant="ghost" size="sm">
          <Link href="/admin/jobs">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Post New Job</h1>
        <p className="text-sm text-muted-foreground">Create a new job listing for your organization</p>
      </div>

      <form onSubmit={(e) => handleSubmit(e, false)}>
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="compensation">Compensation</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          {/* Basic Information Tab */}
          <TabsContent value="basic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Essential job details and classification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="e.g., Senior Frontend Developer"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="e.g., TechCorp Inc."
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobConfiguration.categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Publish Status *</Label>
                    <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Save as Draft</SelectItem>
                        <SelectItem value="active">Publish Immediately</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <strong>Publishing Guide:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• <strong>Draft:</strong> Save your progress without publishing</li>
                      <li>• <strong>Publish:</strong> Make the job live and visible to candidates</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Details Tab */}
          <TabsContent value="details" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
                <CardDescription>Employment type, location, and experience requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="type">Job Type *</Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobConfiguration.jobTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experienceLevel">Experience Level *</Label>
                    <Select value={formData.experienceLevel} onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobConfiguration.experienceLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobConfiguration.locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compensation Tab */}
          <TabsContent value="compensation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compensation</CardTitle>
                <CardDescription>Salary information and benefits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="salaryType">Salary Type *</Label>
                  <Select 
                    value={formData.salaryType} 
                    onValueChange={(value) => handleInputChange('salaryType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {jobConfiguration.salaryTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.salaryType === 'range' && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="salaryMin">Minimum Salary ($) *</Label>
                      <Input
                        id="salaryMin"
                        type="number"
                        value={formData.salaryMin || ''}
                        onChange={(e) => handleInputChange('salaryMin', parseInt(e.target.value) || 0)}
                        placeholder="e.g., 120000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salaryMax">Maximum Salary ($) *</Label>
                      <Input
                        id="salaryMax"
                        type="number"
                        value={formData.salaryMax || ''}
                        onChange={(e) => handleInputChange('salaryMax', parseInt(e.target.value) || 0)}
                        placeholder="e.g., 150000"
                        required
                      />
                    </div>
                  </div>
                )}

                {formData.salaryType === 'specific' && (
                  <div className="space-y-2">
                    <Label htmlFor="specificSalary">Salary Amount ($) *</Label>
                    <Input
                      id="specificSalary"
                      type="number"
                      value={formData.specificSalary || ''}
                      onChange={(e) => handleInputChange('specificSalary', parseInt(e.target.value) || 0)}
                      placeholder="e.g., 135000"
                      required
                    />
                  </div>
                )}

                {(formData.salaryType === 'negotiable' || formData.salaryType === 'not-disclosed') && (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      The salary will be displayed as "{formData.salaryType === 'negotiable' ? 'Negotiable' : 'Competitive'}" to candidates.
                    </p>
                  </div>
                )}

                <div className="p-4 bg-secondary rounded-lg">
                  <p className="text-sm font-medium mb-1">Display Preview:</p>
                  <p className="text-lg font-bold text-primary">{formatSalaryDisplay()}</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Benefits & Perks</Label>
                  <Textarea
                    id="benefits"
                    value={formData.benefits}
                    onChange={(e) => handleInputChange('benefits', e.target.value)}
                    placeholder="Enter each benefit on a new line:&#10;Health insurance&#10;401(k) matching&#10;Flexible hours"
                    className="min-h-[120px]"
                  />
                  <p className="text-xs text-muted-foreground">Enter one benefit per line</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Content</CardTitle>
                <CardDescription>Description, responsibilities, and requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Provide a compelling overview of the role and what makes it exciting..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responsibilities">Key Responsibilities *</Label>
                  <Textarea
                    id="responsibilities"
                    value={formData.responsibilities}
                    onChange={(e) => handleInputChange('responsibilities', e.target.value)}
                    placeholder="Build and maintain web applications&#10;Collaborate with designers and backend engineers&#10;Write clean, maintainable code"
                    className="min-h-[150px]"
                    required
                  />
                  <p className="text-xs text-muted-foreground">Enter one responsibility per line</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements & Qualifications *</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    placeholder="5+ years of experience in frontend development&#10;Strong proficiency in React and TypeScript&#10;Excellent communication skills"
                    className="min-h-[150px]"
                    required
                  />
                  <p className="text-xs text-muted-foreground">Enter one requirement per line</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin/jobs")}
              >
                Cancel
              </Button>
              <div className="flex gap-3">
                <Button
                  type="submit"
                  variant="outline"
                  disabled={isSubmitting}
                >
                  Save as Draft
                </Button>
                <Button
                  type="button"
                  className="bg-primary hover:bg-primary/90"
                  onClick={(e) => handleSubmit(e, true)}
                  disabled={isSubmitting}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Publishing..." : "Publish Job"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
