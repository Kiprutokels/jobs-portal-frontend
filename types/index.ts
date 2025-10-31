export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  salaryType: 'range' | 'specific' | 'negotiable' | 'not-disclosed';
  salaryMin?: number;
  salaryMax?: number;
  description: string;
  category: string;
  postedDate: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  status: 'draft' | 'active' | 'closed' | 'archived';
  experienceLevel: string;
  applicants?: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedAt: string;
}

export interface JobConfiguration {
  categories: string[];
  jobTypes: string[];
  experienceLevels: string[];
  locations: string[];
  salaryTypes: Array<{
    value: string;
    label: string;
  }>;
}
