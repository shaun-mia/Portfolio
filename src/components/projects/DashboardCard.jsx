import { Card } from '../common/Card';

export const DashboardCard = ({ title, description, embedUrl, githubUrl }) => (
  <Card className="flex flex-col h-full">
    <div className="relative w-full pt-[56.25%] mb-4">
      <iframe
        title={title}
        src={embedUrl}
        className="absolute inset-0 w-full h-full rounded-lg"
        allowFullScreen={true}
      />
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
      <a 
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary-500 dark:hover:text-primary-400"
      >
        {title}
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
  </Card>
);
