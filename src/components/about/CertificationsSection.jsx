import { motion } from 'framer-motion';
import { IoCheckmarkCircle } from 'react-icons/io5';

// helper: normalize whitespace (trim + collapse multiple spaces to one)
const normalizeText = (s = '') => String(s).replace(/\s+/g, ' ').trim();

// === Main Certifications Data ===
const certifications = [
	{
		title: 'Professional Certificate in Business Analytics',
		issuer: 'Brit College of Engineering & Technology, United Kingdom',
		link: 'https://bcet.uk/',
		certificateUrl:
			'https://drive.google.com/file/d/1pDcPu1sOnaBMPGFbOE4g2DKUHcFmVUR_/view?usp=sharing',
		duration: '2025',
		description: [
			'Gained foundational knowledge in business analytics and data-driven decision-making',
			'Developed hands-on skills in Power BI and Tableau for data visualization',
			'Strengthened analytical thinking through real-world case projects and practical exercises',
			'Certified as competent at the introductory level in business analytics tools and methodologies',
		],
		type: 'professional',
	},
	{
		title: 'Data Science and Machine Learning Career Path',
		issuer: 'Interactive Care',
		link: 'https://interactivecares.com/',
		duration: '2025',
		description: [
			'Comprehensive machine learning algorithms and applications',
			'Advanced data science techniques and methodologies',
			'Hands-on projects with real-world datasets',
		],
		type: 'professional',
	},
	{
		title: 'Data Analyst Job Ready Bootcamp',
		issuer: 'Data Solution 360',
		link: 'https://www.datasolution360.com/',
		duration: '2024',
		description: [
			'Advanced data analysis, data cleaning, and process optimization',
			'Proficiency in key tools: Power BI, SQL, Python, and Excel',
			'Strengthened foundation in data visualization and statistics',
		],
		type: 'professional',
	},
	{
		title: 'Entrepreneurship, Leadership, and Communication (ELC) Course',
		issuer: 'Sultan Agung Islamic University (UNISSULA), Indonesia',
		link: 'https://unissula.ac.id/',
		duration: '2024',
		description: [
			'International program focusing on entrepreneurial mindset',
			'Leadership skills development',
			'Effective communication for professional growth',
		],
		type: 'academic',
	},
];

// === Additional Certifications Data (Updated Format) ===
const additionalCertifications = [
	{
		title: 'Introduction to End-to-End Analytics using Microsoft Fabric',
		issuer: 'Microsoft',
		duration: 'May 3, 2025',
		description: [
			'End-to-end analytics fundamentals using Microsoft Fabric platform',
		],
	},
	{
		title: 'Get Started Building with Power BI',
		issuer: 'Microsoft',
		duration: 'Apr 30, 2025',
		description: [
			'Basics of Power BI for data visualization and business intelligence',
		],
	},
	{
		title: 'Discover Data Analysis',
		issuer: 'Microsoft',
		duration: 'Apr 30, 2025',
		description: ['Introduction to data analysis concepts and techniques'],
	},
	{
		title: 'Swiggy Data Analysis using Power BI',
		issuer: 'WsCube Tech',
		duration: 'Sep 18, 2024',
		description: [
			'Practical data analysis project using Power BI on Swiggy\'s dataset',
		],
	},
	{
		title: 'Master SQL Fundamentals in 90 Minutes',
		issuer: 'WsCube Tech',
		duration: 'Sep 10, 2024',
		description: ['Quick mastery of SQL basics for data querying and manipulation'],
	},
	{
		title: 'Power BI for Beginners',
		issuer: 'Simplilearn SkillUp',
		duration: 'Aug 12, 2024',
		description: ['Beginner\'s guide to Power BI for creating interactive reports'],
	},
	{
		title: 'Introduction to Microsoft Excel',
		issuer: 'Coursera Project Network',
		duration: 'Jun 4, 2024',
		description: [
			'Fundamentals of Microsoft Excel for data organization and analysis',
		],
	},
	{
		title: 'Introduction to Data Analytics',
		issuer: 'Bohubrihi',
		duration: 'Jun 4, 2024',
		description: ['Overview of data analytics process and tools'],
	},
	{
		title: 'Workshop on Data Science & Applied Machine Learning',
		issuer: 'DIU Data Science Lab',
		duration: 'Dec 2022 (1 Day)',
		description: [
			'Hands-on workshop covering essential data science and machine learning techniques',
		],
	},
	{
		title: 'The Fundamentals of Digital Marketing',
		issuer: 'Google',
		duration: 'Jun 2020 (2 Months)',
		description: [
			'Basic principles of digital marketing including SEO, SEM, and social media',
		],
	},
];

// Combine all certifications
const allCertifications = [...certifications, ...additionalCertifications];

// === Certification Card Component ===
function CertificationCard({ cert, isLast, isAdditional }) {
	if (isAdditional) {
		return (
			<div className="mb-2">
				<div className="flex items-center justify-between gap-2">
					<div className="flex items-start gap-2">
						<IoCheckmarkCircle className="text-primary-500 text-sm flex-shrink-0 mt-1" />
						<h3 className="text-sm font-semibold text-gray-900 dark:text-white">
							{normalizeText(`${cert.title} - ${cert.issuer}`)}
						</h3>
					</div>
					<span className="inline-flex px-2 py-0.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
						{normalizeText(cert.duration)}
					</span>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
				<div>
					{cert.certificateUrl ? (
						<a
							href={cert.certificateUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl font-semibold text-gray-900 dark:text-white hover:underline"
						>
							{normalizeText(cert.title)}
						</a>
					) : (
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
							{normalizeText(cert.title)}
						</h3>
					)}
					<p className="text-primary-600 dark:text-primary-400 font-medium">
						{cert.link ? (
							<a
								href={cert.link}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
							>
								{normalizeText(cert.issuer)}
							</a>
						) : (
							normalizeText(cert.issuer)
						)}
					</p>
				</div>
				<span className="inline-flex px-3 py-1 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
					{normalizeText(cert.duration)}
				</span>
			</div>
			{cert.description && (
				<ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-4 text-justify">
					{cert.description.map((point, idx) => (
						<li key={idx} className="flex items-start gap-3">
							<IoCheckmarkCircle className="text-primary-500 text-xl flex-shrink-0 mt-1" />
							<span>
								{normalizeText(String(point).replace(/\.\s*$/, ''))}
							</span>
						</li>
					))}
				</ul>
			)}
			{!isLast && !isAdditional && (
				<hr className="border-t border-gray-200 dark:border-gray-700 my-6" />
			)}
		</div>
	);
}

// === Main Section Component ===
export const CertificationsSection = () => (
	<section id="certifications" className="container mx-auto px-4 py-16">
		<div className="max-w-3xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
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
						isAdditional={false}
					/>
				))}

				{/* Separator and Additional Certifications Title */}
				<hr className="border-t border-gray-200 dark:border-gray-700 my-8" />
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
					Additional Certifications
				</h3>

				<div className="space-y-2">
					{additionalCertifications.map((cert, index) => (
						<CertificationCard
							key={`additional-${index}`}
							cert={cert}
							isLast={index === additionalCertifications.length - 1}
							isAdditional={true}
						/>
					))}
				</div>
			</motion.div>
		</div>
	</section>
);

export default CertificationsSection;
