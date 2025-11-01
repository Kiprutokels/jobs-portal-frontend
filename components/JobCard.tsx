import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Job } from "@/types";

export default function JobCard(job: Job) {
  return (
    <Card className="h-full hover:shadow-card-hover transition-all duration-300 hover:scale-105 border-border">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl">{job.title}</CardTitle>
          <Badge variant="secondary">{job.department}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{job.company}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {job.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-accent" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-accent" />
            <span>{job.salary}</span>
          </div>
        </div>

        <div className="pt-4">
          <Button asChild variant="outline" className="w-full group">
            <Link href={`/jobs/${job.id}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
