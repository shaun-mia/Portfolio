import { motion } from 'framer-motion';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Business Analyst',
      company: 'CMED Health Ltd.',
      duration: 'Dec 2025 – Present',
      location: 'Dhaka, Bangladesh',
      description: [
        'Gather, document, and analyze business requirements to support ongoing projects and strategic initiatives.',
        'Assist in conducting data analysis to identify trends, patterns, and actionable insights for business improvement.',
        'Collaborate with cross-functional teams including business development, operations, and product teams to support workflow efficiency.',
        'Prepare clear and concise reports, presentations, and summaries to assist management in informed decision-making.',
        'Contribute to optimizing internal processes by identifying gaps and recommending improvements.',
        'Conduct market research and competitor analysis to support business development strategies.',
        'Utilize tools such as Excel, PowerPoint, and analytical platforms like Power BI, Tableau, or SQL to support analysis and reporting tasks.',
        'Support the team in managing and organizing business data to ensure accuracy and accessibility.',
      ],

    },
    {
      title: 'Data Analyst',
      company: 'RO Mart',
      duration: 'Dec 2024 – Nov 2025',
      location: 'Dhaka, Bangladesh',
      description: [
        'Analyze business performance data using Excel, Google Sheets, and SQL to uncover trends and support strategic decisions.',
        'Design and maintain interactive dashboards and automated reports in Excel and Power BI to enhance management efficiency.',
        'Perform data cleaning, transformation, and validation to ensure accuracy and consistency across datasets.',
        'Collaborate with sales, finance, and logistics teams for order tracking, data verification, and performance reporting.',
        'Monitor key performance indicators (KPIs) and provide data-driven insights to improve operational efficiency and sales performance.',
        'Conduct market trend analysis and manage product datasets to optimize inventory, pricing, and marketing strategies.',
      ],
    },
    {
      title: 'Associate',
      company: 'Acote Group',
      duration: 'June 2023 - Dec 2024',
      location: 'Dhaka, Bangladesh',
      description: [
        'Processed, verified, and annotated large datasets to ensure accuracy, consistency, and project compliance.',
        'Met daily and weekly annotation targets with high accuracy and attention to detail.',
        'Collaborated with team members to refine and improve workflow processes, enhancing project efficiency.',
        'Prepared and submitted regular progress reports to project management, ensuring transparent milestone tracking.',
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
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
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

              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-4">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                    <span>{point}</span>
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
