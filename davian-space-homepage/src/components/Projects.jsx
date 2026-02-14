import { useEffect, useState } from 'react';
import { config } from '../config';

const ProjectCard = ({ repo, index }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div 
      className="group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 hover:-translate-y-2 animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-900/10 backdrop-blur-sm"></div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl"></div>
      </div>
      
      <div className="relative p-8 sm:p-10 flex flex-col h-full">
        {/* Repository name */}
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500 tracking-tight">
          {repo.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 text-lg leading-relaxed flex-grow">
          {repo.description || 'No description available'}
        </p>

        {/* Last updated */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">
            Updated {formatDate(repo.updated_at)}
          </span>
        </div>

        {/* View button */}
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          View Project
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectSkeleton = () => (
  <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50 animate-pulse">
    <div className="p-8 sm:p-10">
      <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded-xl w-3/4 mb-4"></div>
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-lg w-full mb-3"></div>
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded-lg w-5/6 mb-6"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3 mb-8"></div>
      <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded-2xl w-2/5"></div>
    </div>
  </div>
);

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/orgs/${config.githubOrg}/repos?sort=updated&per_page=100`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();
        
        // Filter out forked repositories and sort by updated_at
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Projects
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Explore the collection of independent creations and experiments
          </p>
        </div>

        {/* Error state */}
        {error && (
          <div className="text-center py-16 animate-fadeIn">
            <p className="text-red-600 dark:text-red-400 mb-4 text-xl">
              Unable to load projects at this time.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {error}
            </p>
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[...Array(6)].map((_, i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Projects bento grid */}
        {!loading && !error && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 auto-rows-fr">
            {repos.map((repo, index) => (
              <ProjectCard key={repo.id} repo={repo} index={index} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && repos.length === 0 && (
          <div className="text-center py-16 animate-fadeIn">
            <p className="text-gray-600 dark:text-gray-400 text-xl">
              No projects found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
