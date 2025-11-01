"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal, Briefcase } from "lucide-react";
import { Job } from "@/types";

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterDepartment, setFilterDepartment] = useState("all");
  const [filterLocation, setFilterLocation] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const jobs: Job[] = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      description:
        "We're looking for an experienced frontend developer to join our growing team and help build amazing user experiences.",
      department: "Engineering",
      postedDate: "2 days ago",
    },
    {
      id: "2",
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90k - $120k",
      description:
        "Join our creative team to design intuitive and beautiful interfaces for web and mobile applications.",
      department: "Design",
      postedDate: "1 week ago",
    },
    {
      id: "3",
      title: "Marketing Manager",
      company: "GrowthLabs",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $130k",
      description: "Lead our marketing initiatives and help scale our brand across multiple channels.",
      department: "Marketing",
      postedDate: "3 days ago",
    },
    {
      id: "4",
      title: "Sales Executive",
      company: "SalesPro",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$80k - $110k + Commission",
      description: "Drive revenue growth by building relationships with key clients and closing deals.",
      department: "Sales",
      postedDate: "5 days ago",
    },
    {
      id: "5",
      title: "Backend Engineer",
      company: "DataSystems",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130k - $160k",
      description: "Build scalable backend systems and APIs to power our next-generation applications.",
      department: "Engineering",
      postedDate: "1 day ago",
    },
    {
      id: "6",
      title: "Product Designer",
      company: "InnovateCo",
      location: "Seattle, WA",
      type: "Contract",
      salary: "$110k - $140k",
      description: "Shape product direction through user research and create delightful experiences.",
      department: "Design",
      postedDate: "4 days ago",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || job.type === filterType;
    const matchesDepartment = filterDepartment === "all" || job.department === filterDepartment;
    const matchesLocation = filterLocation === "all" || job.location.includes(filterLocation);
    return matchesSearch && matchesType && matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-secondary/20">
        {/* Hero Section with Search */}
        <section className="gradient-hero py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
              <h1 className="font-bold text-primary-foreground">Find Your Next Opportunity</h1>
              <p className="text-primary-foreground/90">
                Discover {jobs.length} job openings from top companies
              </p>

              {/* Main Search Bar */}
              <div className="bg-white rounded-lg shadow-lg p-3 flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-0 focus-visible:ring-0"
                  />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground hidden md:flex">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b bg-background sticky top-16 z-40 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div
              className={`grid gap-3 ${showFilters ? "grid-cols-1" : "hidden"} md:grid md:grid-cols-4`}
            >
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterDepartment} onValueChange={setFilterDepartment}>
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Sales">Sales</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="San Francisco">San Francisco</SelectItem>
                  <SelectItem value="New York">New York</SelectItem>
                  <SelectItem value="Chicago">Chicago</SelectItem>
                  <SelectItem value="Austin">Austin</SelectItem>
                  <SelectItem value="Seattle">Seattle</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => {
                  setFilterType("all");
                  setFilterDepartment("all");
                  setFilterLocation("all");
                  setSearchQuery("");
                }}
                className="text-sm"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filteredJobs.length}</span>{" "}
                {filteredJobs.length === 1 ? "job" : "jobs"} found
              </p>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredJobs.map((job, index) => (
                  <div key={job.id} className="animate-fade-in" style={{ animationDelay: `${index * 30}ms` }}>
                    <JobCard {...job} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-lg border">
                <Briefcase className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Try adjusting your filters or search query
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setFilterType("all");
                    setFilterDepartment("all");
                    setFilterLocation("all");
                    setSearchQuery("");
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
