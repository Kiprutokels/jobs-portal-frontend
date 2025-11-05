"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save, Upload } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

export default function SiteSettings() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    siteName: "CareerHub",
    tagline: "Find your dream job or hire top talent",
    contactEmail: "contact@careerhub.com",
    contactPhone: "+1 (555) 000-0000",
    address: "123 Business St, San Francisco, CA 94102",
    currency: "USD",
    timezone: "UTC",
    maintenanceMode: false,
  });

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Site configuration has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <Button asChild variant="ghost" size="sm" className="mb-2">
          <Link href="/admin/settings">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Settings
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Site Configuration</h1>
        <p className="text-muted-foreground">Manage your site's basic information and settings</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card className="shadow-card animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Update your site's core details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={formData.siteName}
                  onChange={(e) => setFormData({ ...formData, siteName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Site Description</Label>
                <Textarea
                  id="description"
                  placeholder="A brief description of your job portal..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-card animate-fade-in" style={{ animationDelay: "150ms" }}>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>How users can reach you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <Input
                    id="contactPhone"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="min-h-20"
                />
              </div>
            </CardContent>
          </Card>

          {/* Regional Settings */}
          <Card className="shadow-card animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle>Regional Settings</CardTitle>
              <CardDescription>Configure currency and timezone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select value={formData.currency} onValueChange={(value) => setFormData({ ...formData, currency: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="JPY">JPY (¥)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={formData.timezone} onValueChange={(value) => setFormData({ ...formData, timezone: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="America/New_York">Eastern Time</SelectItem>
                      <SelectItem value="America/Chicago">Central Time</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Logo Upload */}
          <Card className="shadow-card animate-fade-in sticky top-24" style={{ animationDelay: "250ms" }}>
            <CardHeader>
              <CardTitle>Site Branding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Site Logo</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">Upload logo</p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Favicon</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">Upload favicon</p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Save Button */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex justify-end">
            <Button onClick={handleSave} className="gradient-primary">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}