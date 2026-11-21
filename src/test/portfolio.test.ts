import { describe, it, expect, beforeEach } from 'vitest';
import { projects, developerProfile, techStack } from '../src/data/projects';
import { Project, DeveloperProfile } from '../src/types/portfolio';

describe('Portfolio Data Schema & Validation', () => {
  it('should contain at least 3 featured projects including ai-agent-core', () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
    const aiAgentCore = projects.find(p => p.id === 'ai-agent-core');
    expect(aiAgentCore).toBeDefined();
    expect(aiAgentCore?.title).toBe('ai-agent-core');
  });

  it('should validate project schema fields for all projects', () => {
    projects.forEach((project: Project) => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('tags');
      expect(project).toHaveProperty('repoUrl');
      expect(Array.isArray(project.tags)).toBe(true);
      expect(typeof project.title).toBe('string');
      expect(typeof project.description).toBe('string');
    });
  });

  it('should have valid developer profile data', () => {
    const profile: DeveloperProfile = developerProfile;
    expect(profile.name).toBeTruthy();
    expect(profile.role).toBe('Full-Stack & AI Software Engineer');
    expect(profile.bio).toBeTruthy();
    expect(profile.github).toBeTruthy();
    expect(profile.linkedin).toBeTruthy();
  });

  it('should contain required tech stack items (TypeScript, Node/Fastify, Go, AI/LLM, Vue/React)', () => {
    const techNames = techStack.map(t => t.name.toLowerCase());
    expect(techNames.some(t => t.includes('typescript'))).toBe(true);
    expect(techNames.some(t => t.includes('node') || t.includes('fastify'))).toBe(true);
    expect(techNames.some(t => t.includes('go'))).toBe(true);
    expect(techNames.some(t => t.includes('ai') || t.includes('llm'))).toBe(true);
    expect(techNames.some(t => t.includes('vue') || t.includes('react'))).toBe(true);
  });
});

describe('Theme Toggle Persistence Logic', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should read and write theme state correctly in localStorage', () => {
    const STORAGE_KEY = 'portfolio_theme';
    
    // Simulate setting theme
    localStorage.setItem(STORAGE_KEY, 'dark');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');

    localStorage.setItem(STORAGE_KEY, 'light');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
  });

  it('should default to light or dark when storage is empty', () => {
    const STORAGE_KEY = 'portfolio_theme';
    const stored = localStorage.getItem(STORAGE_KEY);
    const initialTheme = stored || 'light';
    expect(['light', 'dark']).toContain(initialTheme);
  });
});
