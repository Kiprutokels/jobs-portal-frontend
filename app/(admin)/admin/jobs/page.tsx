"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function AdminJobs() {
  const jobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      applications: 12,
      status: "active",
    },
    {
      id: "2",
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      applications: 8,
      status: "active",
    },
    {
      id: "3",
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      applications: 15,
      status: "active",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Job Listings</h1>
          <p className="text-muted-foreground">Manage all job postings</p>
        </div>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/admin/jobs/new">
            <Plus className="h-4 w-4 mr-2" />
            Post New Job
          </Link>
        </Button>
      </div>

      <div className="grid gap-6">
        {jobs.map((job, index) => (
          <Card key={job.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{job.department}</Badge>
                    <Badge variant="outline">{job.type}</Badge>
                    <Badge className="bg-accent">{job.location}</Badge>
                  </div>
                </div>
                <Badge className={job.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}>
                  {job.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {job.applications} application{job.applications !== 1 ? 's' : ''}
                </p>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/admin/jobs/${job.id}/edit`}>
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Link>
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
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
