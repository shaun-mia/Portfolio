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
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I am Shaun Mia, a data analyst and AI enthusiast with expertise in Power BI, Excel, Python, and SQL. 
            Passionate about data visualization and problem-solving, I enjoy creating impactful dashboards and 
            exploring innovative solutions. My work focuses on real-life projects, blending analytical thinking 
            with technical proficiency to drive insights.
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
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
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
          href="https://drive.google.com/file/d/1jwU0zT40rVwWRA-0Scr2kVKDJMO2IfaT/view?usp=sharing"
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
