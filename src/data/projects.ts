import { Project, TechItem, DeveloperProfile } from '../types/portfolio';

export const developerProfile: DeveloperProfile = {
  name: 'Alex Morgan',
  role: 'Full-Stack & AI Software Engineer',
  bio: 'Building robust distributed systems, high-performance web applications, and autonomous multi-agent AI architectures with precision and elegance.',
  location: 'San Francisco, CA',
  email: 'alex.morgan.dev@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com'
};

export const projects: Project[] = [
  {
    id: 'ai-agent-core',
    title: 'ai-agent-core',
    description: 'An advanced modular framework for orchestrating autonomous LLM agents with deterministic tool-calling, state persistence, and real-time streaming feedback.',
    tags: ['TypeScript', 'Node.js', 'LLMs', 'Fastify', 'OpenAI API'],
    repoUrl: 'https://github.com/rigo-development/ai-agent-core',
    demoUrl: 'https://ai-agent-core-demo.example.com',
    stars: 342,
    featured: true
  },
  {
    id: 'go-micro-mesh',
    title: 'go-micro-mesh',
    description: 'High-throughput microservices message bus and RPC gateway engineered in Go with gRPC, TLS 1.3, and distributed circuit breaking.',
    tags: ['Go', 'gRPC', 'Distributed Systems', 'Docker'],
    repoUrl: 'https://github.com/rigo-development/go-micro-mesh',
    demoUrl: 'https://pkg.go.dev',
    stars: 189,
    featured: true
  },
  {
    id: 'vue-fastify-dashboard',
    title: 'vue-fastify-dashboard',
    description: 'Real-time observability and telemetry dashboard featuring Vue 3 Composition API, Tailwind CSS, and lightning-fast Fastify WebSockets backend.',
    tags: ['Vue 3', 'TypeScript', 'Fastify', 'Tailwind CSS', 'WebSockets'],
    repoUrl: 'https://github.com/rigo-development/vue-fastify-dashboard',
    demoUrl: 'https://vue-dashboard.example.com',
    stars: 215,
    featured: true
  }
];

export const techStack: TechItem[] = [
  { name: 'TypeScript', category: 'Languages', iconName: 'Code', proficiency: 95 },
  { name: 'Node.js / Fastify', category: 'Backend', iconName: 'Server', proficiency: 90 },
  { name: 'Go', category: 'Languages', iconName: 'Cpu', proficiency: 85 },
  { name: 'AI Agents / LLMs', category: 'AI & LLM', iconName: 'Bot', proficiency: 92 },
  { name: 'Vue / React', category: 'Frontend', iconName: 'Layout', proficiency: 90 },
  { name: 'Tailwind CSS', category: 'Frontend', iconName: 'Palette', proficiency: 95 },
  { name: 'PostgreSQL / Redis', category: 'Backend', iconName: 'Database', proficiency: 88 },
  { name: 'Docker & K8s', category: 'DevOps & Tooling', iconName: 'Box', proficiency: 82 }
];
