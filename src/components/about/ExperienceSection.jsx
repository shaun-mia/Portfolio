import { motion } from 'framer-motion';

export const ExperienceSection = () => (
  <section className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      {/* Simple header without underline */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Experience
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Associate
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium">
              Acote Group
            </p>
          </div>
          <span className="inline-flex px-3 py-1 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
            Jun 2024 - Nov 2024
          </span>
        </div>

        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0"></span>
            <span>Consistently meeting daily and weekly annotation targets.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0"></span>
            <span>Collaborating with team members to refine and enhance annotation processes, contributing to workflow improvements.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0"></span>
            <span>Reporting regularly on progress to the project manager, allowing for transparent tracking of milestones and deliverables.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  </section>
);
