import { motion } from 'framer-motion';

export const ProjectSection = ({ title, githubLink, children }) => (
  <section className="py-12">
    <div className="container mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400"
        >
          {title}
        </a>
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  </section>
);
