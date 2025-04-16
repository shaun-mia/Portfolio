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
      duration: "2024",
      description: [
        "International program focusing on entrepreneurial mindset",
        "Leadership skills development",
        "Effective communication for professional growth"
      ],
      type: "academic"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Training & Certifications
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
        >
          {certifications.map((cert, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {cert.issuer}
                  </p>
                </div>
                <span className="inline-flex px-3 py-1 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
                  {cert.duration}
                </span>
              </div>

              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-4">
                {cert.description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <IoCheckmarkCircle className="text-primary-500 text-xl flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {cert.status === 'ongoing' && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-400">
                    Ongoing
                  </span>
                </div>
              )}

              {/* Divider except after last item */}
              {index < certifications.length - 1 && (
                <hr className="border-t border-gray-200 dark:border-gray-700 my-6" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
