"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Shield, UserCog, Ban, CheckCircle, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Users() {
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    {
      id: "1",
      name: "John Admin",
      email: "john@admin.com",
      role: "admin",
      status: "active",
      lastLogin: "2 hours ago",
      joinedDate: "Jan 2023",
      permissions: ["all"],
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      role: "candidate",
      status: "active",
      lastLogin: "5 hours ago",
      joinedDate: "Mar 2024",
      permissions: ["view_jobs", "apply"],
    },
    {
      id: "3",
      name: "TechCorp HR",
      email: "hr@techcorp.com",
      role: "employer",
      status: "active",
      lastLogin: "1 hour ago",
      joinedDate: "Jan 2024",
      permissions: ["post_jobs", "view_applications"],
    },
    {
      id: "4",
      name: "Michael Chen",
      email: "m.chen@email.com",
      role: "candidate",
      status: "active",
      lastLogin: "1 day ago",
      joinedDate: "Feb 2024",
      permissions: ["view_jobs", "apply"],
    },
    {
      id: "5",
      name: "Spam Account",
      email: "spam@fake.com",
      role: "candidate",
      status: "banned",
      lastLogin: "3 days ago",
      joinedDate: "Apr 2024",
      permissions: [],
    },
    {
      id: "6",
      name: "Jane Moderator",
      email: "jane@moderator.com",
      role: "moderator",
      status: "active",
      lastLogin: "30 minutes ago",
      joinedDate: "Dec 2023",
      permissions: ["moderate_jobs", "moderate_users"],
    },
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-purple-600">Admin</Badge>;
      case "moderator":
        return <Badge className="bg-blue-600">Moderator</Badge>;
      case "employer":
        return <Badge className="bg-orange-600">Employer</Badge>;
      case "candidate":
        return <Badge variant="secondary">Candidate</Badge>;
      default:
        return <Badge variant="outline">{role}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-600">Active</Badge>;
      case "banned":
        return <Badge className="bg-red-600">Banned</Badge>;
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            User Management
          </h1>
          <p className="text-muted-foreground">Manage all user accounts and permissions</p>
        </div>
        <Button className="gradient-primary">
          <Shield className="h-4 w-4 mr-2" />
          Add Admin User
        </Button>
      </div>

      <Card className="shadow-card animate-fade-in" style={{ animationDelay: "100ms" }}>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users by name, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="moderator">Moderator</SelectItem>
                <SelectItem value="employer">Employer</SelectItem>
                <SelectItem value="candidate">Candidate</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="banned">Banned</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {users.map((user, index) => (
          <Card
            key={user.id}
            className="animate-fade-in shadow-card hover:shadow-card-hover transition-all duration-300"
            style={{ animationDelay: `${(index + 2) * 50}ms` }}
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold">{user.name}</h3>
                      {getRoleBadge(user.role)}
                      {getStatusBadge(user.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                      <span>Last login: {user.lastLogin}</span>
                      <span>Joined: {user.joinedDate}</span>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <UserCog className="h-4 w-4 mr-2" />
                      Edit User
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Shield className="h-4 w-4 mr-2" />
                      Change Role
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Reset Password
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Ban className="h-4 w-4 mr-2" />
                      Ban User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}