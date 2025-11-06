import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, ArrowRight, Building2, Calendar } from "lucide-react";
import { Job } from "@/types";

export default function JobCard(job: Job) {
  return (
    <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border bg-card overflow-hidden hover:-translate-y-1">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-primary to-accent" />
      
      <CardHeader className="pb-4 pt-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <Badge 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {job.category}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {job.type}
            </Badge>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1.5 line-clamp-1 group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Building2 className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">{job.company}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 pb-5">
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {job.description}
        </p>
        
        <div className="grid grid-cols-1 gap-2.5">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground truncate">{job.location}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 shrink-0">
              <DollarSign className="h-4 w-4 text-green-600 dark:text-green-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">Salary</p>
              <p className="text-sm font-semibold text-foreground truncate">{job.salary}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
          <Calendar className="h-3.5 w-3.5" />
          <span>Posted {job.postedDate}</span>
        </div>

        <Button 
          asChild 
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm hover:shadow-md transition-all"
        >
          <Link href={`/jobs/${job.id}`} className="flex items-center justify-center gap-2">
            View Job Details
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
