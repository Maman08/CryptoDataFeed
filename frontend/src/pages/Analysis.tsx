import React, { useEffect, useState } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export function Analysis() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Set loading to false after component mounts to show iframe
    setLoading(false);
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="space-y-10">

      {/* Embed Grafana Dashboard */}
      <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
        <iframe
          src="http://localhost:3000/d/febyl104kt1c0e/scape-duration?orgId=1&from=now-15m&to=now&timezone=browser"
          width="100%"
          height="600"
          frameBorder="0"
          title="Grafana Dashboard"
        />
      </div>
    </div>
  );
}
