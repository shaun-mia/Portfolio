import { useEffect, useRef } from 'react';

export const TableauViz = ({ vizUrl }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const initViz = () => {
      const vizElement = containerRef.current;
      const url = `https://public.tableau.com/views/${vizUrl}`;
      const options = {
        hideTabs: true,
        hideToolbar: true,
        width: '100%',
        height: '600px'
      };

      // Clear any existing viz
      if (window.viz) {
        window.viz.dispose();
      }

      // Create new viz
      window.viz = new window.tableau.Viz(vizElement, url, options);
    };

    // Load Tableau JavaScript API if not already loaded
    if (!window.tableau) {
      const script = document.createElement('script');
      script.src = 'https://public.tableau.com/javascripts/api/tableau-2.min.js';
      script.onload = initViz;
      document.head.appendChild(script);
    } else {
      initViz();
    }

    // Cleanup
    return () => {
      if (window.viz) {
        window.viz.dispose();
      }
    };
  }, [vizUrl]);

  return <div ref={containerRef} className="tableau-container" />;
};