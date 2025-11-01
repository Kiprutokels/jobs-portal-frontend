"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function AdminApplications() {
  const applications = [
    {
      id: "1",
      candidateName: "John Doe",
      jobTitle: "Senior Frontend Developer",
      email: "john.doe@example.com",
      appliedDate: "2024-01-15",
      status: "pending",
    },
    {
      id: "2",
      candidateName: "Jane Smith",
      jobTitle: "UX/UI Designer",
      email: "jane.smith@example.com",
      appliedDate: "2024-01-14",
      status: "reviewed",
    },
    {
      id: "3",
      candidateName: "Mike Johnson",
      jobTitle: "Marketing Manager",
      email: "mike.j@example.com",
      appliedDate: "2024-01-13",
      status: "accepted",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500";
      case "reviewed":
        return "bg-blue-500";
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
      <div>
        <h1 className="text-3xl font-bold mb-2">Applications</h1>
        <p className="text-muted-foreground">Manage candidate applications</p>
      </div>

      <div className="grid gap-6">
        {applications.map((app, index) => (
          <Card key={app.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">{app.candidateName}</CardTitle>
                  <p className="text-sm text-muted-foreground">{app.email}</p>
                </div>
                <Badge className={getStatusColor(app.status)}>
                  {app.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{app.jobTitle}</p>
                  <p className="text-xs text-muted-foreground">
                    Applied on {new Date(app.appliedDate).toLocaleDateString()}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
