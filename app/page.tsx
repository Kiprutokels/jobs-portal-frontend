import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Briefcase, Users, TrendingUp, Search } from "lucide-react";

export default function Home() {
  const stats = [
    { icon: Briefcase, value: "500+", label: "Active Jobs" },
    { icon: Users, value: "10K+", label: "Candidates" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  Find Your Dream Job Today
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90">
                  Connect with top companies and discover opportunities that match your skills and ambitions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/jobs" className="group">
                      View Openings
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
                  >
                    <Link href="/admin/jobs/new">Post a Job</Link>
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in hidden md:block">
                <div className="rounded-2xl shadow-2xl w-full h-[400px] bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Briefcase className="h-32 w-32 text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CareerHub?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We connect talented professionals with leading companies across industries.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl border border-border hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy Job Search</h3>
                <p className="text-muted-foreground">
                  Filter by location, department, and job type to find the perfect match for your skills.
                </p>
              </div>
              <div
                className="bg-card p-8 rounded-xl border border-border hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: "100ms" }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Top Companies</h3>
                <p className="text-muted-foreground">
                  Work with industry leaders who value talent, innovation, and professional growth.
                </p>
              </div>
              <div
                className="bg-card p-8 rounded-xl border border-border hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
                <p className="text-muted-foreground">
                  Find opportunities that align with your career goals and help you reach new heights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-in">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
              Browse our latest job openings and find the perfect role for you.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-fade-in">
              <Link href="/jobs" className="group">
                Explore Opportunities
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
