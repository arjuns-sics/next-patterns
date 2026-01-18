// Partial Prerendering (PPR)
// Concept: Hybrid of static + dynamic. Static shell, dynamic holes.
// How to implement: Enable PPR in next.config.js and use Suspense boundaries
// Teaching points: Static outer layout, dynamic inner data, Edge-first optimization

import DynamicContent from './DynamicContent';
import { Suspense } from 'react';

export default function PPRPage() {
  const renderTime = new Date().toISOString();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-mono font-bold text-zinc-900 dark:text-white mb-2">
                Partial Prerendering (PPR)
              </h1>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300">
                Hybrid of static + dynamic • Static shell, dynamic holes
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 text-sm font-mono font-medium rounded-full">
                Mixed
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 text-sm font-mono font-medium rounded-full">
                Static
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Render Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Page Rendered:</span>
                  <span className="font-mono text-sm text-zinc-900 dark:text-white">{renderTime}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">PPR Enabled:</span>
                  <span className="font-mono text-sm bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 px-2 py-1 rounded">Yes</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Static Shell:</span>
                  <span className="text-sm font-mono text-zinc-900 dark:text-white">Layout & Fast Content</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Dynamic Holes:</span>
                  <span className="text-sm font-mono text-zinc-900 dark:text-white">Slow Components</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">What is PPR?</h2>
              <div className="space-y-2 font-mono text-zinc-600 dark:text-zinc-300">
                <p>Partial Prerendering combines the best of both worlds:</p>
                <p>• Static content is prerendered for instant loading</p>
                <p>• Dynamic content is streamed in as it becomes available</p>
                <p>• Optimized for Edge deployment</p>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <p className="text-sm font-mono text-yellow-800 dark:text-yellow-200">
                  <strong>Key Benefit:</strong> Fast initial load with dynamic updates, perfect for modern web applications.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-8">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Page Structure</h2>
            <div className="space-y-6">
              {/* Static content renders immediately */}
              <div className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4">
                <h3 className="font-mono font-semibold text-zinc-900 dark:text-white mb-2">Static Content (Instant)</h3>
                <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <p className="text-sm font-mono text-zinc-600 dark:text-zinc-300">
                    This content is prerendered and available immediately when the page loads.
                    It provides instant feedback to users while dynamic content loads in the background.
                  </p>
                  <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
                    <p className="text-xs font-mono text-green-800 dark:text-green-200">
                      Static content: Layout, navigation, and fast-loading components
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic content with Suspense boundary */}
              <div className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4">
                <h3 className="font-mono font-semibold text-zinc-900 dark:text-white mb-2">Dynamic Content (Streaming)</h3>
                <Suspense fallback={
                  <div className="flex items-center space-x-3 p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-600"></div>
                    <span className="font-mono text-zinc-600 dark:text-zinc-300">Loading dynamic content...</span>
                  </div>
                }>
                  <DynamicContent />
                </Suspense>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-8">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Code Example</h2>
            <pre className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
{`// Enable PPR in next.config.js
// export const config = {{ 
//   experimental: {{ ppr: true }} 
// }};

export default function PPRPage() {{
  return (
    <div>
      {/* Static content renders immediately */}
      <StaticContent />
      
      {/* Dynamic content streams in */}
      <Suspense fallback={{<div>Loading...</div>}}>
        <DynamicContent />
      </Suspense>
    </div>
  );
}}

// This component will be prerendered
function StaticContent() {{
  return <div>Static content loaded instantly!</div>;
}}

// This component will be streamed
async function DynamicContent() {{
  await new Promise(resolve => setTimeout(resolve, 1500));
  return <div>Dynamic content loaded after 1.5 seconds!</div>;
}}`}
              </code>
            </pre>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">When to Use PPR</h2>
            <ul className="space-y-2 font-mono text-zinc-600 dark:text-zinc-300">
              <li>• Applications with both static and dynamic content</li>
              <li>• E-commerce sites with product listings and real-time inventory</li>
              <li>• News sites with static articles and dynamic comments</li>
              <li>• Dashboards with static layout and live data</li>
              <li>• Any application that needs both speed and freshness</li>
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="/streaming" className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
              ← Back to Streaming
            </a>
            <a href="/server-actions" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-mono">
              Next: Server Actions →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
