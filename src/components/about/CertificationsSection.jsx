import { motion } from 'framer-motion';
import { IoCheckmarkCircle } from 'react-icons/io5';

// Certifications data
const certifications = [
  {
    title: "Professional Certificate in Business Analytics",
    issuer: "Brit College of Engineering & Technology, United Kingdom",
    link: "https://bcet.uk/",
    certificateUrl: "https://drive.google.com/file/d/1pDcPu1sOnaBMPGFbOE4g2DKUHcFmVUR_/view?usp=sharing",
    duration: "2025",
    description: [
      "Gained foundational knowledge in business analytics and data-driven decision-making",
      "Developed hands-on skills in Power BI and Tableau for data visualization",
      "Strengthened analytical thinking through real-world case projects and practical exercises",
      "Certified as competent at the introductory level in business analytics tools and methodologies"
    ],
    type: "professional"
  },
  {
    title: "Data Analyst Job Ready Bootcamp",
    issuer: "Data Solution 360",
    link: "https://www.datasolution360.com/",
    duration: "2024",
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
    link: "https://interactivecares.com/",
    duration: "2025",
    description: [
      "Comprehensive machine learning algorithms and applications",
      "Advanced data science techniques and methodologies",
      "Hands-on projects with real-world datasets"
    ],
    type: "professional"
    // status removed, duration updated to 2025
  },
  {
    title: "Entrepreneurship, Leadership, and Communication (ELC) Course",
    issuer: "Sultan Agung Islamic University (UNISSULA), Indonesia",
    link: "https://unissula.ac.id/",
    duration: "2024",
    description: [
      "International program focusing on entrepreneurial mindset",
      "Leadership skills development",
      "Effective communication for professional growth"
    ],
    type: "academic"
  }
];

// Sort certifications by year descending
certifications.sort((a, b) => Number(b.duration) - Number(a.duration));

// Certification Card Component
function CertificationCard({ cert, isLast }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
        <div>
          {/* If certificateUrl exists, make title a link to certificate */}
          {cert.certificateUrl ? (
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-gray-900 dark:text-white hover:underline"
            >
              {cert.title}
            </a>
          ) : (
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {cert.title}
            </h3>
          )}
          <p className="text-primary-600 dark:text-primary-400 font-medium">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {cert.issuer}
            </a>
          </p>
        </div>
        <span className="inline-flex px-3 py-1 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
          {cert.duration}
        </span>
      </div>
      <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-4 text-justify">
        {cert.description.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <IoCheckmarkCircle className="text-primary-500 text-xl flex-shrink-0 mt-1" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {/* Divider except after last item */}
      {!isLast && (
        <hr className="border-t border-gray-200 dark:border-gray-700 my-6" />
      )}
    </div>
  );
}

// Main Section Component
export const CertificationsSection = () => (
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
          <CertificationCard
            key={index}
            cert={cert}
            isLast={index === certifications.length - 1}
          />
        ))}
      </motion.div>
    </div>
  </section>
);
