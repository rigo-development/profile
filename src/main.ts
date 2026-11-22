import { developerProfile, projects, techStack } from './data/projects';
import { Project, TechItem } from './types/portfolio';

export function initPortfolioApp(): void {
  const appElement = document.getElementById('app');
  if (!appElement) return;

  // Render main layout wrapper
  appElement.innerHTML = `
    <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <!-- Navigation Header -->
      <header class="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-bold text-lg">
              AM
            </div>
            <div>
              <span class="font-bold text-slate-900 dark:text-white tracking-tight">${developerProfile.name}</span>
              <span class="hidden sm:inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">Available for Hire</span>
            </div>
          </div>
          <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#hero" class="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</a>
            <a href="#tech" class="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tech Stack</a>
            <a href="#projects" class="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" class="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</a>
          </nav>
          <div class="flex items-center space-x-4">
            <!-- Theme Toggle Button -->
            <button id="theme-toggle" aria-label="Toggle theme" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <!-- Sun Icon -->
              <svg id="theme-icon-sun" class="w-5 h-5 hidden dark:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <!-- Moon Icon -->
              <svg id="theme-icon-moon" class="w-5 h-5 block dark:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
            <a href="#projects" class="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-lg shadow-emerald-500/20 transition-all">
              View Work
            </a>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="flex-grow">
        <!-- Hero Section -->
        <section id="hero" class="relative pt-20 pb-24 md:pt-32 md:pb-36 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
          <div class="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
          
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-3xl mx-auto text-center">
              <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 animate-pulse">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Engineering Reliable Distributed Systems & AI Agents</span>
              </div>
              <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                Hi, I'm <span class="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">${developerProfile.name}</span>
              </h1>
              <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-normal">
                ${developerProfile.bio}
              </p>
              <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#projects" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 text-center">
                  Explore Featured Projects
                </a>
                <a href="#contact" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 shadow-sm transition-all text-center">
                  Get in Touch
                </a>
              </div>
              
              <!-- Quick Stats / Badges -->
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 text-left">
                <div class="bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
                  <div class="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">5+</div>
                  <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Years Engineering Experience</div>
                </div>
                <div class="bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
                  <div class="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">20+</div>
                  <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Production Systems Delivered</div>
                </div>
                <div class="col-span-2 sm:col-span-1 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
                  <div class="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">99.9%</div>
                  <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Uptime SLA Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Tech Stack Section -->
        <section id="tech" class="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
              <h2 class="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-3">Expertise & Capabilities</h2>
              <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Core Technology Stack</h3>
              <p class="mt-3 text-slate-600 dark:text-slate-400">Battle-tested tools and frameworks I leverage to design scalable backend services and intuitive user interfaces.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              ${techStack.map((tech: TechItem) => `
                <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      ${tech.category}
                    </span>
                    <span class="text-sm font-bold text-slate-400 dark:text-slate-500">${tech.proficiency}%</span>
                  </div>
                  <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    ${tech.name}
                  </h4>
                  <!-- Proficiency Bar -->
                  <div class="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div class="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-1000" style="width: ${tech.proficiency}%"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Featured Projects Section -->
        <section id="projects" class="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <h2 class="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-3">Portfolio Work</h2>
                <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Open Source & Systems</h3>
              </div>
              <p class="mt-4 md:mt-0 text-slate-600 dark:text-slate-400 max-w-md">
                Production-grade repositories showcasing clean architecture, type safety, and real-world utility.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${projects.map((project: Project) => `
                <div class="bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div class="flex items-center justify-between mb-6">
                      <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-lg group-hover:scale-110 transition-transform">
                        ${project.title.substring(0, 2).toUpperCase()}
                      </div>
                      ${project.stars ? `
                        <div class="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-200/60 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                          <svg class="w-3.5 h-3.5 text-amber-500 fill-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                          <span>${project.stars}</span>
                        </div>
                      ` : ''}
                    </div>

                    <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      ${project.title}
                    </h4>
                    
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      ${project.description}
                    </p>

                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2 mb-8">
                      ${project.tags.map(tag => `
                        <span class="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                          ${tag}
                        </span>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Links -->
                  <div class="flex items-center space-x-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                      Repository
                    </a>
                    ${project.demoUrl ? `
                      <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition-all">
                        <span>Live Demo</span>
                        <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      </a>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-3">Let's Connect</h2>
            <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Start a Conversation</h3>
            <p class="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10">
              Whether you have an exciting engineering challenge, an AI systems inquiry, or want to collaborate on open source—my inbox is always open.
            </p>
            <div class="inline-flex flex-col sm:flex-row items-center gap-4">
              <a href="mailto:${developerProfile.email}" class="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/20 transition-all">
                Email Me Directly
              </a>
              <a href="${developerProfile.linkedin}" target="_blank" rel="noopener noreferrer" class="px-8 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700 transition-all">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">
              AM
            </div>
            <span class="text-slate-700 dark:text-slate-300 font-medium text-sm">
              © ${new Date().getFullYear()} ${developerProfile.name}. Built with TypeScript, Tailwind CSS & Vite.
            </span>
          </div>
          <div class="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
            <a href="${developerProfile.github}" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">GitHub</a>
            <a href="${developerProfile.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">LinkedIn</a>
            <a href="${developerProfile.twitter || '#'}" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Twitter / X</a>
          </div>
        </div>
      </footer>
    </div>
  `;

  // Theme Toggle Logic
  const themeToggleBtn = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'portfolio_theme';

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    });
  }
}

// Auto-initialize on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolioApp);
  } else {
    initPortfolioApp();
  }
}
