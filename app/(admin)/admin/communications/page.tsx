"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Send, FileText, History, Eye } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Communications() {
  const { toast } = useToast();
  const [recipient, setRecipient] = useState("all");

  const emailTemplates = [
    {
      id: "1",
      name: "Welcome Email",
      subject: "Welcome to CareerHub!",
      description: "Sent to new users upon registration",
      lastModified: "2 days ago",
    },
    {
      id: "2",
      name: "Job Application Received",
      subject: "We've received your application",
      description: "Sent when candidate applies to a job",
      lastModified: "1 week ago",
    },
    {
      id: "3",
      name: "Job Approved",
      subject: "Your job posting is now live",
      description: "Sent when employer's job is approved",
      lastModified: "3 days ago",
    },
    {
      id: "4",
      name: "Monthly Newsletter",
      subject: "Your monthly job market update",
      description: "Monthly newsletter template",
      lastModified: "1 day ago",
    },
  ];

  const emailHistory = [
    {
      id: "1",
      subject: "March Newsletter - Top Tech Jobs",
      recipients: "All Candidates (2,145)",
      sentDate: "Mar 15, 2024",
      opens: 1432,
      clicks: 234,
    },
    {
      id: "2",
      subject: "New Feature Announcement",
      recipients: "All Users (3,429)",
      sentDate: "Mar 10, 2024",
      opens: 2156,
      clicks: 456,
    },
    {
      id: "3",
      subject: "Premium Plan Benefits",
      recipients: "All Employers (156)",
      sentDate: "Mar 5, 2024",
      opens: 98,
      clicks: 23,
    },
  ];

  const handleSendNewsletter = () => {
    toast({
      title: "Newsletter Sent!",
      description: "Your newsletter has been sent successfully.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Communications
        </h1>
        <p className="text-muted-foreground">Send emails and manage communication templates</p>
      </div>

      <Tabs defaultValue="send" className="space-y-6">
        <TabsList>
          <TabsTrigger value="send">Send Newsletter</TabsTrigger>
          <TabsTrigger value="templates">Email Templates</TabsTrigger>
          <TabsTrigger value="history">Email History</TabsTrigger>
        </TabsList>

        <TabsContent value="send" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Compose Newsletter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Recipients</Label>
                  <Select value={recipient} onValueChange={setRecipient}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users (3,429)</SelectItem>
                      <SelectItem value="candidates">All Candidates (2,145)</SelectItem>
                      <SelectItem value="employers">All Employers (156)</SelectItem>
                      <SelectItem value="active">Active Users Only (2,876)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Template (Optional)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                      {emailTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Subject Line</Label>
                <Input placeholder="Enter email subject..." />
              </div>

              <div className="space-y-2">
                <Label>Email Content</Label>
                <Textarea
                  placeholder="Write your message here..."
                  className="min-h-[300px]"
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={handleSendNewsletter} className="gradient-primary">
                  <Send className="h-4 w-4 mr-2" />
                  Send Newsletter
                </Button>
                <Button variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline">Save Draft</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="flex justify-end">
            <Button className="gradient-primary">
              <FileText className="h-4 w-4 mr-2" />
              Create New Template
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {emailTemplates.map((template, index) => (
              <Card
                key={template.id}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{template.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{template.subject}</p>
                    </div>
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Modified {template.lastModified}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                Email History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emailHistory.map((email) => (
                  <div
                    key={email.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{email.subject}</p>
                      <p className="text-sm text-muted-foreground">{email.recipients}</p>
                      <p className="text-xs text-muted-foreground mt-1">Sent on {email.sentDate}</p>
                    </div>
                    <div className="text-right mr-4">
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-semibold text-green-600">{email.opens}</span> opens
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold text-blue-600">{email.clicks}</span> clicks
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}