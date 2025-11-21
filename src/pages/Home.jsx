import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaPython, FaChartBar } from 'react-icons/fa';
import { SiPowerbi, SiMicrosoftexcel, SiMysql, SiPostgresql, SiTableau } from 'react-icons/si';
import { SkillSection } from '../components/skills/SkillSection';
import { Link } from 'react-router-dom';

const Home = () => {
  const technologies = [
    { name: 'Python', icon: <FaPython />, level: 90 },
    { name: 'Power BI', icon: <SiPowerbi />, level: 90 },
    { name: 'Excel', icon: <SiMicrosoftexcel />, level: 90 },
    { name: 'MySQL', icon: <SiMysql />, level: 85 },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
    { name: 'Tableau', icon: <SiTableau />, level: 85 },
    { name: 'Data Visualization', icon: <FaChartBar />, level: 90 }
  ];

  const skillCategories = [
    {
      title: 'Data Analysis',
      skills: ['Statistical Analysis', 'Data Cleaning', 'Data Visualization', 'Exploratory Data Analysis']
    },
    {
      title: 'Tools',
      skills: ['Excel', 'Power BI', 'Tableau', 'Python', 'SQL']
    },
    {
      title: 'Programming',
      skills: ['Python', 'SQL', 'R']
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'Database Design']
    },
    {
      title: 'Visualization',
      skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn']
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-gray-900/50 dark:to-gray-800/50 -z-10" />

      <div className="relative pt-20 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  <span className="block text-gray-900 dark:text-white">Data Analyst</span>
                  <span className="block bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    & AI Enthusiast
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl text-justify">
                  Passionate Data Analyst focused on visualization and problem-solving.
                  
                  Currently at RO Mart, turning real-world data into insights that drive smart business decisions.                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a href="https://drive.google.com/file/d/1pDcPu1sOnaBMPGFbOE4g2DKUHcFmVUR_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Download Resume
                  </a>
                  <a
                    href="mailto:shaunmia.cse@gmail.com"
                    className="bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                  >
                    Get in touch
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <SocialLink href="https://github.com/shaun-mia" icon={<FaGithub />} />
                  <SocialLink href="https://www.linkedin.com/in/shaun-mia" icon={<FaLinkedin />} />
                  <SocialLink href="https://www.youtube.com/@shauns_data_diaries" icon={<FaYoutube />} />
                  <SocialLink href="https://www.facebook.com/nameisshaun" icon={<FaFacebook />} />
                  <SocialLink href="https://www.instagram.com/nameisshaun" icon={<FaInstagram />} />
                  <SocialLink href="mailto:shaunmia.cse@gmail.com" icon={<FaEnvelope />} />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex-1 relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <img
                  src="../assets/images/shaun-mia-profile.png"
                  alt="Shaun Mia"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Links Section - NEW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="card p-8 bg-gradient-to-br from-primary-500/10 to-primary-500/5 border border-primary-500/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Explore My Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Browse through my portfolio of data analysis and visualization projects.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium"
              >
                View Projects
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card p-8 bg-gradient-to-br from-secondary-500/10 to-secondary-500/5 border border-secondary-500/20"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Read My Articles
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Technical articles about data analysis, visualization, and AI tools.
              </p>
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 text-secondary-500 hover:text-secondary-600 font-medium"
              >
                Read Articles
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Replace the old technologies section with the new SkillSection */}
        <SkillSection
          technologies={technologies}
          skillCategories={skillCategories}
        />

        {/* Competitive Programming section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Competitive Programming
            </h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 text-justify">
              Solved 200+ problems in OOP, DSA, and coding challenges of varying difficulty across online judges.
              Focused on improving problem-solving, mastering algorithms, and enhancing logical thinking.
              Also participated in multiple programming contests to refine competitive coding skills.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { platform: 'Beecrowd', id: '462659', link: 'https://judge.beecrowd.com/en/profile/462659' },
                { platform: 'LeetCode', id: 'shaunmia', link: 'https://leetcode.com/u/shaunmia' },
                { platform: 'Codeforces', id: 'shaunmia', link: 'https://codeforces.com/profile/shaunmia' },
                { platform: 'HackerRank', id: 'shaunmia', link: 'https://www.hackerrank.com/profile/shaunmia' },
              ].map((profile) => (
                <a
                  key={profile.platform}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-6 hover:scale-105 transition-transform"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {profile.platform}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {profile.id}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
  >
    {icon}
  </a>
);

export default Home;
