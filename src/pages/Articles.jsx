import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { getAllArticles } from '../utils/articleUtils';
import { SearchInput } from '../components/common/SearchInput';
import { FaSearch, FaClock, FaTags, FaTimesCircle } from 'react-icons/fa';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      const allArticles = await getAllArticles();
      setArticles(allArticles);
    };
    loadArticles();
  }, []);

  // Get unique tags from all articles
  const allTags = ['All', ...new Set(articles.flatMap(article => article.tags))];

  // Popular keywords for quick search
  const suggestedKeywords = [
    'SQL', 'Data Analysis', 'Power BI', 'Visualization', 'Tutorial',
    'Best Practices', 'Dashboard', 'Analytics', 'Performance'
  ];

  const handleKeywordClick = (keyword) => {
    if (!selectedKeywords.includes(keyword)) {
      setSelectedKeywords([...selectedKeywords, keyword]);
      setSearchQuery(prev => prev ? `${prev} ${keyword}` : keyword);
    }
  };

  const removeKeyword = (keyword) => {
    setSelectedKeywords(selectedKeywords.filter(k => k !== keyword));
    setSearchQuery(prev => 
      prev.replace(new RegExp(`\\b${keyword}\\b`, 'g'), '').trim()
    );
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = (
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    const matchesTag = selectedTag === 'All' || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMMM dd, yyyy');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Technical Articles
        </motion.h1>
        <motion.p 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          Insights and tutorials on data analysis, visualization, and best practices
        </motion.p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-col gap-4">
          {/* Search Input */}
          <div className="w-full">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search articles..."
              icon={<FaSearch className="text-gray-400" />}
            />
          </div>

          {/* Keywords Section */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Suggested:
            </span>
            {suggestedKeywords.map(keyword => (
              <button
                key={keyword}
                onClick={() => handleKeywordClick(keyword)}
                disabled={selectedKeywords.includes(keyword)}
                className={`px-3 py-1 text-sm rounded-full transition-colors
                  ${selectedKeywords.includes(keyword)
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
              >
                {keyword}
              </button>
            ))}
          </div>

          {/* Selected Keywords */}
          {selectedKeywords.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Selected:
              </span>
              {selectedKeywords.map(keyword => (
                <span
                  key={keyword}
                  className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-full
                           bg-primary-500 text-white"
                >
                  {keyword}
                  <button
                    onClick={() => removeKeyword(keyword)}
                    className="hover:text-primary-200 transition-colors"
                  >
                    <FaTimesCircle size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
                  ${selectedTag === tag 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredArticles.map((article, index) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={`/articles/${article.slug}`}
              className="group block h-full"
            >
              <article className="card h-full p-6 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-primary-500/10">
                <div className="flex flex-col h-full">
                  {/* Article Header */}
                  <header>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                      {article.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <FaClock className="text-primary-500" />
                        {formatDate(article.date)}
                      </span>
                    </div>
                  </header>

                  {/* Article Content */}
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-justify">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 
                                   text-primary-600 dark:text-primary-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Article Footer */}
                  <footer className="mt-4 flex items-center justify-end">
                    <span className="inline-flex items-center gap-2 text-primary-500 font-medium group-hover:translate-x-1 transition-transform">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </footer>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="max-w-md mx-auto">
            <FaSearch className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-justify">
              Try adjusting your search or filter settings to find what you're looking for.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Articles;
