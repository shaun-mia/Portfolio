import { motion } from 'framer-motion';

export const PageLayout = ({ 
  title, 
  subtitle, 
  children, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen py-24 ${className}`}
    >
      {/* Page Header */}
      {(title || subtitle) && (
        <div className="container mx-auto px-4 mb-12 text-center">
          {title && (
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {title}
            </motion.h1>
          )}
          {subtitle && (
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
      
      {/* Page Content */}
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.div>
  );
};