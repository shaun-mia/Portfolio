import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilters } from '../components/projects/ProjectFilters';

const powerBiProjects = [
  {
    title: "Bangladesh Crime Data Analysis 2024",
    description: "Bangladesh Crime Data Analysis 2024 - A comprehensive analysis of crime data across Bangladesh for 2024 using Power BI to reveal trends, regional distributions, and seasonal patterns.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYWYyMTgzZTUtZDRmZS00MWFlLWFhOWYtNzBmOTY0ZWQxN2ZhIiwidCI6IjEyYjQwYmQxLTllNjEtNDMyOS1iNGJmLTk2MjQ1NTgzOGQ4OCIsImMiOjEwfQ%3D%3D",
    githubUrl: "https://github.com/shaun-mia/Power-BI-Data-Analysis-Project/tree/main/Bangladesh%20Crime%20Data%20Analysis_2024"
  },
  {
    title: "Good Cabs Performance Analysis",
    description: "Good Cabs Performance Analysis - In-depth evaluation of Goodcabs operations across tier-2 cities in India, focusing on trip volume, satisfaction metrics and performance indicators.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMWE2MDcwODctNGEwMi00NmJjLWFiMDItNzZlNmY0YzQ3ZWMyIiwidCI6IjEyYjQwYmQxLTllNjEtNDMyOS1iNGJmLTk2MjQ1NTgzOGQ4OCIsImMiOjEwfQ%3D%3D",
    githubUrl: "https://github.com/shaun-mia/CobeBasics-Resume-Projects/tree/main/Challenge_13"
  },
  {
    title: "HR Analytics Dashboard",
    description: "HR Analytics Dashboard - Comprehensive analysis of employee performance, satisfaction levels, demographics and attrition trends using Power BI.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMGZhYjY1NjItZDZiYS00NWRiLWE4NDAtNjQzMTMxZGVhMjU2IiwidCI6IjEyYjQwYmQxLTllNjEtNDMyOS1iNGJmLTk2MjQ1NTgzOGQ4OCIsImMiOjEwfQ%3D%3D",
    githubUrl: "https://github.com/shaun-mia/Power-BI-Data-Analysis-Project/tree/main/HR%20Analytics%20%20Dashboard"
  },
  {
    title: "Movies Analytics Dashboard",
    description: "Movies Analytics Dashboard - Detailed analysis of movie performance metrics, audience demographics, and financial data using advanced DAX calculations.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYjMwZTBkMzktMmVkNS00NmFmLWI5ZDUtZTRjMjk0MTM5MDk1IiwidCI6IjEyYjQwYmQxLTllNjEtNDMyOS1iNGJmLTk2MjQ1NTgzOGQ4OCIsImMiOjEwfQ%3D%3D",
    githubUrl: "https://github.com/shaun-mia/Power-BI-Data-Analysis-Project/tree/main/Movies%20Analytics%20Dashboard"
  },
  {
    title: "Netflix Data Analysis",
    description: "Netflix Data Analysis - Comprehensive exploration of Netflix content trends, content ratings, genre popularity patterns and regional viewing statistics.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMGE4YTQ5MDItNTRlZC00MWEzLTk0NjEtZWJkZTNiMjk3ODc3IiwidCI6IjEyYjQwYmQxLTllNjEtNDMyOS1iNGJmLTk2MjQ1NTgzOGQ4OCIsImMiOjEwfQ%3D%3D",
    githubUrl: "https://github.com/shaun-mia/Power-BI-Data-Analysis-Project/tree/main/Netflix%20Data%20Analysis"
  },
  {
    title: "Dengue Diagnosis Analysis",
    description: "Dengue Diagnosis Analysis - Statistical analysis of dengue cases focusing on patient demographics, diagnostic trends and treatment outcomes.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTU1MTRiODktMjNiOS00ZWQwLTg1NTktYzMxNDljZDhkNDRlIiwidCI6IjEyYjQwYmQxLTllNjEtNDMyOS1iNGJmLTk2MjQ1NTgzOGQ4OCIsImMiOjEwfQ%3D%3D",
    githubUrl: "https://github.com/shaun-mia/Power-BI-Data-Analysis-Project/tree/main/Dengue%20Diagnosis%20and%20Blood%20Parameters%20Analysis%20Dashboard"
  },
  {
    title: "US Regional Sales Analysis",
    description: "US Regional Sales Analysis - Detailed analysis of sales performance and key metrics across different regions in the United States.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDk1ZTkzZDYtYzNiYi00YWEzLWFkOGMtYzNlNzhhZDBiZjRiIiwidCI6IjEyYjQwYmQxLTllNjEtNDMyOS1iNGJmLTk2MjQ1NTgzOGQ4OCIsImMiOjEwfQ%3D%3D",
    githubUrl: "https://github.com/shaun-mia/Power-BI-Data-Analysis-Project/tree/main/US_Regional_Sales_Dashboard-main"
  },
  {
    title: "Credit Card Financial Analysis",
    description: "Credit Card Financial Analysis - Deep dive into credit card transaction patterns and customer behavior analysis using Power BI.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZWRjNTlhYzctNDgxMi00ZWQxLWE3MWYtZjJlNDExNTE2ZTNiIiwidCI6IjEyYjQwYmQxLTllNjEtNDMyOS1iNGJmLTk2MjQ1NTgzOGQ4OCIsImMiOjEwfQ%3D%3D",
    githubUrl: "https://github.com/shaun-mia/Power-BI-Data-Analysis-Project/tree/main/Credit-Card-Financial-Dashboard-main"
  },
  {
    title: "E-Commerce Sales Analysis",
    description: "E-Commerce Sales Analysis - Comprehensive analysis of e-commerce sales data with key performance indicators and trend analysis.",
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYjE2Nzk1YTAtMDNhOS00Y2ZmLWFiMzctYmYxOTQ3NzE3YTc3IiwidCI6IjEyYjQwYmQxLTllNjEtNDMyOS1iNGJmLTk2MjQ1NTgzOGQ4OCIsImMiOjEwfQ%3D%3D",
    githubUrl: "https://github.com/shaun-mia/Power-BI-Data-Analysis-Project/tree/main/e-commerce-sales-data-analysis-main"
  }
];

const tableauProjects = [
  {
    title: "Superstore Sales Analysis",
    description: "This Superstore Sales Analysis Tableau dashboard visualizes profit and sales data across U.S. states, highlighting regional performance trends. It includes monthly sales trends by category and a detailed breakdown of sales and sub-categories for 2018-2020, showcasing data-driven insights.",
    embedUrl: "https://public.tableau.com/app/profile/shaun.mia/viz/MonthlySales_17469038460290/SuperstoreSalesAnalysis",
    githubUrl: "https://github.com/shaun-mia/BDA_BCET/tree/main/Tableau",
    image: "https://i.ibb.co/9mHQ9JTM/image.png",  // Updated image URL
    technologies: ["Tableau", "Data Visualization", "Sales Analytics", "Dashboard"]
  }
];

// Convert PowerBI and Tableau projects to common format
const formattedVisualizationProjects = [
  ...powerBiProjects.map(project => ({
    name: project.title,
    description: project.description,
    technologies: ['Power BI', 'Data Visualization', 'Analytics', 'Dashboard'],
    github: project.githubUrl,
    image: 'images/powerbi.webp',
    embedUrl: project.embedUrl,
    type: 'Power BI'
  })),
  ...tableauProjects.map(project => ({
    name: project.title,
    description: project.description,
    technologies: project.technologies,
    github: project.githubUrl,
    image: project.image,  // Use the provided image URL
    embedUrl: project.embedUrl,  // Use the Tableau Public URL
    type: 'Tableau'
  }))
];

const sqlProjects = [
  {
    name: "Consumer Goods Ad-Hoc Analysis",
    description: "Consumer Goods Ad-Hoc Analysis - Comprehensive SQL analysis project addressing various ad-hoc requests in the consumer goods sector.",
    technologies: ["SQL", "Data Analysis", "Business Intelligence"],
    github: "https://github.com/shaun-mia/SQL-Data-Analysis-Project/tree/main/AD-HOC%20Requests%20%20Consumer%20Goods%20Domain%20%20SQL%20Project",
    image: "https://i.ibb.co.com/fVfpqXJX/sql-ad.jpg"
  },
  {
    name: "Airbnb Outlier Detection and EDA",
    description: "Airbnb Outlier Detection and EDA - Statistical analysis of Airbnb listings for detecting pricing anomalies and customer satisfaction patterns.",
    technologies: ["SQL", "Data Analysis", "EDA"],
    github: "https://github.com/shaun-mia/SQL-Data-Analysis-Project/tree/main/AIRBNB%20Outlier%20Detection%20and%20EDA",
    image: "https://i.ibb.co.com/39kL8K63/airbnb.webp"
  },
  {
    name: "Cohort Analysis Using SQL",
    description: "Cohort Analysis Using SQL - Customer behavior tracking and purchasing pattern analysis using cohort methodology on online retail data.",
    technologies: ["SQL", "Data Analysis", "Cohort Analysis"],
    github: "https://github.com/shaun-mia/SQL-Data-Analysis-Project/tree/main/Cohort%20Analysis%20Using%20SQL",
    image: "https://i.ibb.co.com/R44WgBsc/py-cohort.webp"
  },
  {
    name: "Pizza Sales Analysis Using SQL",
    description: "Pizza Sales Analysis Using SQL - Detailed analysis of pizza sales patterns, customer preferences and revenue trends.",
    technologies: ["SQL", "Data Analysis", "Sales Analytics"],
    github: "https://github.com/shaun-mia/SQL-Data-Analysis-Project/tree/main/Pizza%20Sales%20Analysis%20using%20SQL",
    image: "https://i.ibb.co.com/3mpngLF1/pizza.webp"
  },
  {
    name: "RFM Segmentation on Sales Data",
    description: "RFM Segmentation on Sales Data - Customer segmentation analysis based on Recency, Frequency, and Monetary value metrics.",
    technologies: ["SQL", "Data Analysis", "Customer Segmentation"],
    github: "https://github.com/shaun-mia/SQL-Data-Analysis-Project/tree/main/RFM%20Segmentation%20On%20Sales%20Data",
    image: "https://i.ibb.co.com/sdbRr8gg/sql-rfm.webp"
  }
];

const excelProjects = [
  {
    name: "HR Attrition Analysis Dashboard",
    description: "HR Attrition Analysis Dashboard - Comprehensive analysis of employee turnover trends using Excel Power Query and Pivot Tables.",
    technologies: ["Excel", "Power Query", "Data Visualization"],
    github: "https://github.com/shaun-mia/Excel-dashboard-Project?tab=readme-ov-file#2-hr-attrition-dashboard",
    image: "https://i.ibb.co.com/JwnhVPx7/Ex-HR-Attirition-Dasgboard.png"
  },
  {
    name: "Coffee Shop Sales Dashboard",
    description: "Coffee Shop Sales Dashboard - Detailed analysis of coffee shop performance metrics, product categories, and sales trends.",
    technologies: ["Excel", "Data Analysis", "Dashboard"],
    github: "https://github.com/shaun-mia/Excel-dashboard-Project?tab=readme-ov-file#1-coffee-shop-sales-dashboard",
    image: "https://i.ibb.co.com/0Vs5wf72/Ex-Coffee-Shop-Sales-Dashboard.png"
  },
  {
    name: "Retail Sale Analysis Dashboard",
    description: "Retail Sale Analysis Dashboard - In-depth evaluation of retail sales across different regions, product categories and time periods.",
    technologies: ["Excel", "Data Analysis", "Visualization"],
    github: "https://github.com/shaun-mia/Excel-dashboard-Project?tab=readme-ov-file#3-retail-sale-analysis-dashboard",
    image: "https://i.ibb.co.com/wh34Wdqz/Ex-Retail-Sale.png"
  }
];

const pythonProjects = [
  {
    name: "Food Delivery Cost Analysis",
    description: "Food Delivery Cost Analysis - Comprehensive analysis of delivery costs, discounts, and profitability metrics in food delivery operations.",
    technologies: ["Python", "Pandas", "Data Analysis"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Food-Delivery-Costs-Analysis-main",
    image: "https://i.ibb.co.com/sdfxK32J/py-food.webp"
  },
  {
    name: "Adult Income Analysis",
    description: "Adult Income Analysis - Statistical examination of demographic and employment factors influencing income levels.",
    technologies: ["Python", "Data Analysis", "Statistical Analysis"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Adult_Income_Analysis",
    image: "https://i.ibb.co.com/1GWj4RhB/py-Adult.webp"
  },
  {
    name: "Airbnb Listings EDA",
    description: "Airbnb Listings EDA - Exploratory data analysis of NYC Airbnb listings examining pricing patterns and availability trends.",
    technologies: ["Python", "Pandas", "EDA"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Airbnb%20Listings%20EDA",
    image: "https://i.ibb.co.com/39kL8K63/airbnb.webp"
  },
  {
    name: "Amazon Rainforest Fire Analysis",
    description: "Amazon Rainforest Fire Analysis - Time series analysis of forest fire trends in Brazil's Amazon region from 1998 to 2017.",
    technologies: ["Python", "Data Analysis", "Time Series"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Amazon%20Rainforest%20Fire%20Data%20Analysis",
    image: "https://i.ibb.co.com/s9k2mDjZ/py-amazon-rain.webp"
  },
  {
    name: "Amazon Sales Analysis",
    description: "Amazon Sales Analysis - Detailed analysis of customer behavior patterns and sales trends on Amazon platform.",
    technologies: ["Python", "Data Analysis", "Visualization"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Amazon%20Sales%20Analysis",
    image: "https://i.ibb.co.com/LzW0DRL9/py-amazon-sales.webp"
  },
  {
    name: "Customer Churn Analysis",
    description: "Customer Churn Analysis - Statistical analysis identifying key factors contributing to customer churn rates.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Customer-Churn-analysis-main",
    image: "https://i.ibb.co.com/R44WgBsc/py-cohort.webp"
  },
  {
    name: "Fake News Detection",
    description: "Fake News Detection - Machine learning model development for classifying news articles as authentic or fake.",
    technologies: ["Python", "Machine Learning", "NLP"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Fake_News_Detection_Using_ML",
    image: "https://i.ibb.co.com/SD92F6xw/py-fake.webp"
  },
  {
    name: "Google Play Store Apps Analysis",
    description: "Google Play Store Apps Analysis - Comprehensive analysis of app ratings, categories, and pricing trends on Google Play Store.",
    technologies: ["Python", "Data Analysis", "Visualization"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Google%20Play%20Store%20Apps%20Data%20Analysis",
    image: "https://i.ibb.co.com/9KqwQpY/py-play.webp"
  },
  {
    name: "Heart Disease Analysis",
    description: "Heart Disease Analysis - Statistical analysis identifying key factors influencing heart disease likelihood.",
    technologies: ["Python", "Machine Learning", "Healthcare Analytics"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Heart%20desiess",
    image: "https://i.ibb.co.com/4RWNzS6j/py-heart.webp"
  },
  {
    name: "Netflix & IMDB Analysis",
    description: `Netflix & IMDB Analysis - Detailed analysis of Netflix content growth patterns and correlation with IMDB ratings.
    • Analyzed content distribution across different genres and countries
    • Evaluated rating patterns and their correlation with viewer engagement
    • Tracked content addition/removal trends over multiple years
    • Identified popular genres and their performance metrics
    • Examined the relationship between IMDB ratings and Netflix popularity
    • Created visualizations for content type distribution
    • Analyzed seasonal content strategy and release patterns`,
    technologies: ["Python", "Data Analysis", "Visualization"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Netflix%20%26%20IMDB%20Data%20Analysis",
    image: "https://i.ibb.co.com/Wv7nXRcn/py-net.webp"
  },
  {
    name: "Police Vehicle Analysis",
    description: `Police Vehicle Analysis - Statistical analysis of police vehicle stop data to identify trends and potential disparities.
    • Examined geographical distribution of vehicle stops
    • Analyzed timing patterns of stops across different periods
    • Evaluated demographic patterns in stop data
    • Assessed outcome distributions and correlations
    • Investigated duration patterns of vehicle stops
    • Created heatmaps for high-frequency stop locations
    • Analyzed reason categories for stops and their frequencies`,
    technologies: ["Python", "Data Analysis", "Statistical Analysis"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Police%20Vehicle%20Checking%20Analysis",
    image: "https://i.ibb.co.com/yBScbkgc/py-vihecal.webp"
  },
  {
    name: "Spotify Music Analysis",
    description: `Spotify Music Analysis - Comprehensive analysis of music trends and genre characteristics on Spotify platform.
    • Analyzed audio features across different music genres
    • Tracked popularity trends of various music styles
    • Evaluated seasonal listening pattern variations
    • Identified key factors influencing track popularity
    • Examined artist collaboration networks
    • Analyzed tempo and energy distribution by genre
    • Created visualizations for feature correlations
    • Investigated playlist inclusion patterns`,
    technologies: ["Python", "Data Analysis", "Music Analytics"],
    github: "https://github.com/shaun-mia/Python-Data-Analysis-Project/tree/main/Spotify%20music%20analysis",
    image: "https://i.ibb.co.com/GXFPjsb/py-spotifiy.webp"
  }
];

// Combine all projects with their types
const allProjects = [
  ...formattedVisualizationProjects.map(p => ({ 
    ...p, 
    type: p.technologies.includes('Tableau') ? 'Tableau' : 'Power BI'
  })),
  ...sqlProjects.map(p => ({ ...p, type: 'SQL' })),
  ...excelProjects.map(p => ({ ...p, type: 'Excel' })),
  ...pythonProjects.map(p => ({ ...p, type: 'Python' }))
];

const Projects = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Filter projects based on type and search query
  const filteredProjects = allProjects.filter(project => {
    const matchesType = selectedType === 'All' || project.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      (project.type && project.type.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const handleProjectClick = (project) => {
    localStorage.setItem('selectedProject', JSON.stringify(project));
    navigate(`/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const commonKeywords = [
    'All',
    'Power BI',
    'Tableau', 
    'SQL',
    'Excel',
    'Python',
    'Data Analysis',
    'Data Visualization',
    'Dashboard',
    'Analytics',
    'Sales',
    'Business Intelligence',
    'Machine Learning',
    'Tableau Dashboard',  // Added Tableau-specific keywords
    'Interactive Visualization'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-24"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my collection of data analysis and visualization projects using 
            various tools and technologies.
          </p>
        </div>

        {/* Filters */}
        <ProjectFilters
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          onSearch={setSearchQuery}
          keywords={commonKeywords}
        />

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
              No projects found matching your criteria.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Try adjusting your search or filter settings. You can search by project name, 
              description, or technology stack. Or browse all projects by selecting 'All' 
              from the filter options above.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
