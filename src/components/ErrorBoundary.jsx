import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center bg-red-50 dark:bg-red-900/10 rounded-lg">
          <h3 className="text-red-600 dark:text-red-400">Failed to load visualization</h3>
          <a 
            href={`https://public.tableau.com/app/profile/shaun.mia/viz/${this.props.vizUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600 mt-2 inline-block"
          >
            Open in Tableau Public
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}