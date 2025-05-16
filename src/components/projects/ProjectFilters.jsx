import { motion } from 'framer-motion';

export const ProjectFilters = ({ selectedType, onTypeChange, onSearch }) => {
  const projectTypes = ['All', 'Power BI', 'Tableau', 'SQL', 'Python', 'Excel'];  // Added 'Tableau'

  return (
    <div className="mb-8 space-y-4">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search projects..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 
                 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      />

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
        {projectTypes.map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onTypeChange(type)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors
              ${selectedType === type 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {type}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
