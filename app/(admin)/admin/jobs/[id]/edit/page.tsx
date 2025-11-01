"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save, Eye, Trash2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { jobConfiguration } from "@/lib/jobConfig";

export default function EditJob() {
  const { id } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [salaryType, setSalaryType] = useState("range");

  // Mock job data - in production, fetch from API
  const [formData, setFormData] = useState({
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    category: "Engineering",
    type: "Full-time",
    experienceLevel: "Senior Level (5-10 years)",
    location: "San Francisco, CA",
    salaryType: "range",
    salaryMin: 120000,
    salaryMax: 150000,
    specificSalary: 0,
    status: "active",
    description: "We're looking for an experienced frontend developer to join our growing team.",
    responsibilities: "Build and maintain web applications\nCollaborate with designers\nWrite clean code",
    requirements: "5+ years of experience\nReact expertise\nTypeScript proficiency",
    benefits: "Health insurance\n401(k) matching\nFlexible hours",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatSalaryDisplay = () => {
    switch (formData.salaryType) {
      case 'range':
        return `$${(formData.salaryMin / 1000).toFixed(0)}k - $${(formData.salaryMax / 1000).toFixed(0)}k`;
      case 'specific':
        return `$${(formData.specificSalary / 1000).toFixed(0)}k`;
      case 'negotiable':
        return 'Negotiable';
      case 'not-disclosed':
        return 'Competitive';
      default:
        return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Job Updated!",
        description: "The job listing has been updated successfully.",
      });
      router.push("/admin/jobs");
    }, 1000);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this job? This action cannot be undone.")) {
      toast({
        title: "Job Deleted",
        description: "The job listing has been removed.",
        variant: "destructive",
      });
      router.push("/admin/jobs");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'draft': return 'bg-yellow-500';
      case 'closed': return 'bg-red-500';
      case 'archived': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Button asChild variant="ghost" size="sm">
            <Link href="/admin/jobs">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">Edit Job Listing</h1>
            <Badge className={getStatusColor(formData.status)}>
              {formData.status}
            </Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href={`/jobs/${id}`} target="_blank">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Link>
          </Button>
          <Button onClick={handleDelete} variant="destructive">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
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
                    <Label htmlFor="status">Status *</Label>
                    <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <strong>Status Guide:</strong>
                    <ul className="mt-1 space-y-1 list-disc list-inside">
                      <li><strong>Draft:</strong> Not visible to candidates</li>
                      <li><strong>Active:</strong> Published and accepting applications</li>
                      <li><strong>Closed:</strong> No longer accepting applications</li>
                      <li><strong>Archived:</strong> Hidden from all listings</li>
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
                    onValueChange={(value) => {
                      handleInputChange('salaryType', value);
                      setSalaryType(value);
                    }}
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
                        value={formData.salaryMin}
                        onChange={(e) => handleInputChange('salaryMin', parseInt(e.target.value))}
                        placeholder="120000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salaryMax">Maximum Salary ($) *</Label>
                      <Input
                        id="salaryMax"
                        type="number"
                        value={formData.salaryMax}
                        onChange={(e) => handleInputChange('salaryMax', parseInt(e.target.value))}
                        placeholder="150000"
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
                      value={formData.specificSalary}
                      onChange={(e) => handleInputChange('specificSalary', parseInt(e.target.value))}
                      placeholder="135000"
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
                    placeholder="Enter each benefit on a new line:&#10;- Health insurance&#10;- 401(k) matching&#10;- Flexible hours"
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
                    placeholder="Provide a compelling overview of the role..."
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
                    placeholder="Enter each responsibility on a new line..."
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
                    placeholder="Enter each requirement on a new line..."
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
                  type="button"
                  variant="outline"
                  onClick={() => handleInputChange('status', 'draft')}
                  disabled={isSubmitting}
                >
                  Save as Draft
                </Button>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Saving..." : "Update Job"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
