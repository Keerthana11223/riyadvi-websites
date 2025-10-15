
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  problem: string;
  solution: string;
  features: string[];
  useCases: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
  tools: string[];
}

export interface Testimonial {
  name: string;
  photoUrl: string;
  quote: string;
}

export interface Job {
    id: string;
    title: string;
    department: 'Engineering' | 'Design' | 'Marketing' | 'Management';
    designation: 'Intern' | 'Junior' | 'Mid-Level' | 'Senior' | 'Lead';
    description: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    tags: string[];
}
