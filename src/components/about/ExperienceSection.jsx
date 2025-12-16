import { motion } from 'framer-motion';

export const ExperienceSection = (Experience) => {
  const experiences = [
    {
      title: 'Business Analyst',
      company: 'CMED Health Ltd.',
      duration: 'Dec 2025 – Present',
      location: 'Dhaka, Bangladesh',
      description: [
        'Gather and document business requirements; collaborate with stakeholders to translate needs into data solutions',
        'Analyze data using Power BI, SQL, and Excel to build reports and dashboards that inform decision-making',
        'Optimize processes, conduct market research, and prepare presentations to support strategic initiatives'
      ],

    },
    {
      title: 'Data Analyst',
      company: 'RO Mart',
      duration: 'Dec 2024 – Nov 2025',
      location: 'Dhaka, Bangladesh',
      description: [
        'Clean, transform, and validate datasets; perform exploratory and statistical analysis to surface trends',
        'Design and maintain automated dashboards and reports in Power BI and Excel to monitor KPIs',
        'Collaborate with sales, finance, and logistics to support order tracking, data verification, and performance reporting'
      ],
    },
    {
      title: 'Associate',
      company: 'Acote Group',
      duration: 'June 2023 - Dec 2024',
      location: 'Dhaka, Bangladesh',
      description: [
        'Process and annotate large datasets with high accuracy to support ML and data projects',
        'Meet throughput targets while improving workflow efficiency through team collaboration',
        'Prepare progress reports and ensure data quality and project compliance'
      ],
    },
  ];

  // Sort experiences by starting year descending
  experiences.sort((a, b) => {
    // Extract start year from duration string
    const getStartYear = (exp) => {
      const match = exp.duration.match(/\b(\d{4})\b/);
      return match ? Number(match[1]) : 0;
    };
    return getStartYear(b) - getStartYear(a);
  });

  return (
    <section id="experience" className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white"> {/* reduced section heading */}
            Experience
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
        >
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  {exp.company.includes('CMED Health') ? (
                    <a
                      href="https://cmed.com.bd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800"
                      onClick={e => e.stopPropagation()}
                    >
                      {exp.company}
                    </a>
                  ) : exp.company === 'RO Mart' ? (
                    <a
                      href="https://romartbd.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800"
                      onClick={e => e.stopPropagation()}
                    >
                      {exp.company}
                    </a>
                  ) : exp.company === 'Acote Group' ? (
                    <a
                      href="https://acotegroup.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800"
                      onClick={e => e.stopPropagation()}
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.company}
                    </p>
                  )}
                </div>
                <span className="inline-flex px-3 py-1 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
                  {exp.duration}
                </span>
              </div>

              {/* Show only first 3 points; (descriptions now contain exactly 3 points) */}
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-4">
                {exp.description.slice(0, 3).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                    <span>{point.replace(/\.\s*$/, '')}</span>
                  </li>
                ))}
              </ul>

              {/* Divider except after last item */}
              {index < experiences.length - 1 && (
                <hr className="border-t border-gray-200 dark:border-gray-700 my-6" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
