import { motion } from 'framer-motion';
import { SkillGroupCard } from './SkillGroupCard';
import { 
  FaCode, FaTools, FaDatabase, FaChartBar, FaUserCog
} from 'react-icons/fa';

export const SkillSection = () => {
  const skillGroups = [
    {
      title: 'Programming',
      icon: <FaCode />,
      skills: ['C', 'Python', 'SQL', 'HTML', 'CSS']
    },
    {
      title: 'Tools',
      icon: <FaTools />,
      skills: ['Excel', 'Power BI', 'Power Query', 'AI Tools']
    },
    {
      title: 'Visualization',
      icon: <FaChartBar />,
      skills: ['Power BI', 'Excel Charts']
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      title: 'Others',
      icon: <FaUserCog />,
      skills: ['Analytical Thinking', 'Time Management', 'Quick Learning', 'Team Collaboration']
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillGroupCard {...group} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
