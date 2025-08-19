import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const ProjectCard = ({ project, onClick }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    onClick={onClick}
  >
    {/* Project Image or Embed */}
    <div className="relative pt-[56.25%]">
      {project.embedUrl ? (
        <iframe
          title={project.name}
          src={project.embedUrl}
          className="absolute inset-0 w-full h-full"
          allowFullScreen={true}
        />
      ) : (
        <img
          src={project.image || '/images/default-project.webp'}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>

    {/* Project Details */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {project.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 
                     text-primary-700 dark:text-primary-300 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 text-gray-600 hover:text-primary-500 
                   dark:text-gray-400 dark:hover:text-primary-400"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        {project.embedUrl && (
          <a
            href={project.embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-gray-600 hover:text-primary-500 
                     dark:text-gray-400 dark:hover:text-primary-400"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);
