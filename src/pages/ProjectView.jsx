import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get project data based on ID from localStorage
  const project = JSON.parse(localStorage.getItem('selectedProject'));

  if (!project) {
    return <div className="container mx-auto px-4 py-16">Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <button
        onClick={() => navigate('/projects')}
        className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
      >
        <FaArrowLeft />
        <span>Back to Projects</span>
      </button>

      <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title || project.name}
        </h1>
        
        {project.embedUrl && (
          <div className="relative w-full pt-[56.25%] mb-8">
            <iframe
              title={project.title}
              src={project.embedUrl}
              className="absolute inset-0 w-full h-full rounded-lg"
              allowFullScreen={true}
            />
          </div>
        )}

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 
                         text-primary-700 dark:text-primary-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href={project.githubUrl || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FaGithub className="text-xl" />
            View on GitHub
          </a>
          {project.embedUrl && (
            <a
              href={project.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              <FaExternalLinkAlt className="text-xl" />
              View Live Dashboard
            </a>
          )}
        </div>
      </article>
    </motion.div>
  );
};

export default ProjectView;
