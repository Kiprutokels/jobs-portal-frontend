# CareerHub - Job Portal Application

A modern, full-featured job portal built with Next.js 16, TypeScript, and Tailwind CSS v4. This application provides a complete solution for job seekers and employers to connect.

## Features

### For Job Seekers
- 🔍 Browse and search job listings with advanced filters
- 📝 Create and manage user profiles
- 💼 Apply for jobs with resume upload
- 🔐 Secure authentication and registration
- 📱 Fully responsive design

### For Employers/Admins
- 📊 Admin dashboard with analytics
- ➕ Post and manage job listings
- 📋 View and manage applications
- 👥 Track candidate pipeline
- ✏️ Edit and delete job postings

### General Features
- 🎨 Modern UI with shadcn/ui components
- 🌙 Professional design system
- ⚡ Fast performance with Next.js 16
- 📱 Mobile-first responsive design
- ♿ Accessible components
- 🔔 Toast notifications

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **State Management:** React Context API

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd jobs-portal-frontend
Install dependencies
Copynpm install
Install shadcn/ui
Copynpx shadcn@latest init
When prompted:

TypeScript: Yes
Style: Default
Base color: Slate
CSS variables: Yes
React Server Components: Yes
components directory: components
utils directory: lib
Tailwind config: Yes
CSS file: app/globals.css
Use aliases: Yes (@/*)
Install required shadcn components
Copynpx shadcn@latest add button card input label textarea select badge toast dropdown-menu dialog table tabs avatar
Install additional dependencies
Copynpm install lucide-react class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-toast @radix-ui/react-dropdown-menu
Running the Application
Development mode:

Copynpm run dev
The application will be available at http://localhost:3000

Production build:

Copynpm run build
npm start
Project Structure
jobs-portal-frontend/
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── (admin)/             # Admin panel
│   │   └── admin/
│   │       ├── dashboard/
│   │       ├── jobs/
│   │       └── applications/
│   ├── jobs/                # Public job listings
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── profile/             # User profile
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # shadcn components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── JobCard.tsx
│   └── AdminNav.tsx
├── contexts/
│   └── AuthContext.tsx      # Authentication context
├── lib/
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript types
Usage Guide
For Job Seekers
Register/Login

Click "Sign Up" in the navigation
Fill in your details
Or login if you already have an account
Browse Jobs

Navigate to "Jobs" page
Use filters to narrow down results
Click on any job to view details
Apply for Jobs

View job details
Click "Apply Now"
You'll be prompted to login if not authenticated
Fill in the application form and upload your resume
Manage Profile

Access your profile from the user menu
Update personal information
View your applications
For Employers/Admins
Access Admin Panel

Login with an admin account
(Demo: use email containing "admin", e.g., admin@test.com)
Click "Admin Panel" in the navigation
Post a Job

Go to Admin → Jobs
Click "Post New Job"
Fill in job details
Publish the listing
Manage Applications

Go to Admin → Applications
View all applications
Update application status
Review candidate details
Dashboard Analytics

View key metrics on the dashboard
Track total jobs, applications, and success rates
Monitor recent activity
Authentication
The application uses a mock authentication system for demonstration purposes. In production, you should replace this with a real authentication service (e.g., NextAuth.js, Auth0, Firebase Auth).

Demo Accounts:

Admin: Any email containing "admin" (e.g., admin@test.com)
Regular User: Any other email
Deployment
Vercel (Recommended)
Copynpm install -g vercel
vercel
Docker
CopyFROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
Build and run:

Copydocker build -t careerhub .
docker run -p 3000:3000 careerhub
Environment Variables
Create a .env.local file in the root directory:

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (when implementing real backend)
DATABASE_URL=your_database_url

# Authentication (when implementing real auth)
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
Future Enhancements
 Real backend API integration
 Database integration (PostgreSQL/MongoDB)
 Email notifications
 Advanced search with Elasticsearch
 Resume parsing with AI
 Video interview scheduling
 Payment integration for premium job postings
 Analytics dashboard
 Multi-language support
 Dark mode toggle
Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Support
For support, email support@careerhub.com or open an issue in the repository.

Acknowledgments
Next.js
Tailwind CSS
shadcn/ui
Lucide Icons