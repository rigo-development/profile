export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
  stars?: number;
  featured: boolean;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI & LLM' | 'Languages' | 'DevOps & Tooling';
  iconName: string;
  proficiency: number; // 1-100
}

export interface DeveloperProfile {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
}
