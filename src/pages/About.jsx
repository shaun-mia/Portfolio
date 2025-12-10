import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ExperienceSection } from '../components/about/ExperienceSection';
import { CertificationsSection } from '../components/about/CertificationsSection';

const About = () => {
  return (
    <div className="min-h-screen py-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-justify">
            As a Business Analyst at CMED Health Ltd, I specialize in turning complex business data into actionable insights that drive strategic decision-making and operational efficiency. With hands-on expertise in Power BI, SQL, Python, and Excel, I deliver data-driven solutions that optimize workflows, uncover trends, and support business growth. I am passionate about leveraging advanced analytics, process optimization, and innovative methodologies to solve real-world challenges and continuously enhance organizational performance.
          </p>
          <div className="flex justify-center gap-4">
            <SocialButton
              href="https://github.com/shaun-mia"
              icon={<FaGithub />}
              label="GitHub"
            />
            <SocialButton
              href="https://www.linkedin.com/in/shaun-mia"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                B.Sc. in Computer Science and Engineering
              </h3>
              <p className="text-primary-600 dark:text-primary-400">
                Daffodil International University
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 text-justify">
                Jan 2020 - Dec 2024 • CGPA: 3.08
              </p>
            </div>
            {/* Add other education entries similarly */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* CertificationsSection */}
      <CertificationsSection />

      {/* Download Resume */}
      <div className="container mx-auto px-4 text-center mt-16">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://docs.google.com/document/d/1A0H6u0ZrDOjs1JQsyL0K8idl8aHzZ6Kh/edit?usp=drive_link&ouid=106209587651246225417&rtpof=true&sd=true"
          className="button-primary inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </motion.a>
      </div>
    </div>
  );
};

const SocialButton = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 
             text-gray-900 dark:text-white shadow-md hover:shadow-lg transition-shadow
             border border-gray-200 dark:border-gray-700"
  >
    <span className="text-xl">{icon}</span>
    <span>{label}</span>
  </a>
);

export default About;
