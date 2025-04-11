import { motion } from 'framer-motion';
import { IoCheckmarkCircle } from 'react-icons/io5';

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "Data Analyst Job Ready Bootcamp",
      issuer: "Data Solution 360",
      duration: "6 months",
      description: [
        "Advanced data analysis, data cleaning, and process optimization",
        "Proficiency in key tools: Power BI, SQL, Python, and Excel",
        "Strengthened foundation in data visualization and statistics"
      ],
      type: "professional"
    },
    {
      title: "Data Science and Machine Learning Career Path",
      issuer: "Interactive Care",
      duration: "Ongoing",
      description: [
        "Comprehensive machine learning algorithms and applications",
        "Advanced data science techniques and methodologies",
        "Hands-on projects with real-world datasets"
      ],
      type: "professional",
      status: "ongoing"
    },
    {
      title: "Entrepreneurship, Leadership, and Communication (ELC) Course",
      issuer: "Sultan Agung Islamic University (UNISSULA), Indonesia",
      description: [
        "International program focusing on entrepreneurial mindset",
        "Leadership skills development",
        "Effective communication for professional growth"
      ],
      type: "academic"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Training & Certification
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 bg-white dark:bg-gray-800 shadow-lg"
        >
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`${
                  index !== certifications.length - 1 ? 'border-b border-gray-200 dark:border-gray-700 pb-8' : ''
                }`}
              >
                <div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                      {cert.status === 'ongoing' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400">
                          Ongoing
                        </span>
                      )}
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {cert.issuer}
                    </p>
                    {cert.duration && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Duration: {cert.duration}
                      </p>
                    )}
                    <div className="mt-4">
                      <ul className="space-y-2">
                        {cert.description.map((item, i) => (
                          <li 
                            key={i}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                          >
                            <IoCheckmarkCircle className="text-primary-500 text-lg mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
