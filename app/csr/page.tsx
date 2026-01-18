'use client';

// Client-Side Rendering (CSR)
// Concept: Rendering happens in the browser. JS required. Similar to traditional React.
// How to implement: Add 'use client' and fetch data inside useEffect
// Teaching points: No SEO-friendly HTML, good for highly interactive UIs

import { useState, useEffect } from 'react';

interface TimeData {
  timestamp: string;
  randomNumber: number;
  message: string;
}

export default function CSRPage() {
  const [data, setData] = useState<TimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [renderTime, setRenderTime] = useState(new Date().toISOString());

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Fetch data on the client side
        const res = await fetch('/api/time');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-mono font-bold text-zinc-900 dark:text-white mb-2">
                Client-Side Rendering (CSR)
              </h1>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300">
                Rendering happens in browser • JS required
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-sm font-mono font-medium rounded-full">
                Browser
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100 text-sm font-mono font-medium rounded-full">
                Interactive
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Client-Side Data</h2>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900 dark:border-white"></div>
                  <span className="ml-3 font-mono text-zinc-600 dark:text-zinc-300">Loading data...</span>
                </div>
              ) : error ? (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="font-mono text-red-800 dark:text-red-200">Error: {error}</p>
                </div>
              ) : data ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                    <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Timestamp:</span>
                    <span className="font-mono text-sm text-zinc-900 dark:text-white">{data.timestamp}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                    <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Random Number:</span>
                    <span className="font-mono text-sm text-zinc-900 dark:text-white">{data.randomNumber}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                    <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Message:</span>
                    <span className="text-sm font-mono text-zinc-900 dark:text-white">{data.message}</span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Render Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Page Rendered:</span>
                  <span className="font-mono text-sm text-zinc-900 dark:text-white">{renderTime}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Rendering:</span>
                  <span className="font-mono text-sm bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded">Client</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Data Fetch:</span>
                  <span className="font-mono text-sm bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100 px-2 py-1 rounded">useEffect</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">SEO Friendly:</span>
                  <span className="text-sm font-mono text-red-600 dark:text-red-400">No</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-8">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Code Example</h2>
            <pre className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
{`'use client';

import {{ useState, useEffect }} from 'react';

export default function CSRPage() {{
  const [data, setData] = useState(null);

  useEffect(() => {{
    async function fetchData() {{
      const res = await fetch('/api/time');
      const result = await res.json();
      setData(result);
    }}
    fetchData();
  }}, []);

  // Component renders in browser
  // Data fetched after initial render
  // No server-side HTML generation
}}`}
              </code>
            </pre>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">When to Use CSR</h2>
            <ul className="space-y-2 font-mono text-zinc-600 dark:text-zinc-300">
              <li>• Highly interactive dashboards and tools</li>
              <li>• Real-time data visualization</li>
              <li>• User-specific content that can't be cached</li>
              <li>• Progressive Web Apps (PWAs)</li>
              <li>• Applications that need offline functionality</li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm font-mono text-blue-800 dark:text-blue-200">
                <strong>Key Benefit:</strong> Provides rich interactivity and dynamic behavior that's impossible with server-side rendering alone.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="/isr" className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
              ← Back to ISR
            </a>
            <a href="/rsc" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-mono">
              Next: RSC →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
