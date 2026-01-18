// Streaming & Suspense
// Concept: Send HTML in chunks. Improves perceived performance.
// How to implement: Use Suspense with artificial delays in components
// Teaching points: Page renders progressively, works with Server Components

import SlowComponent from './SlowComponent';
import FastComponent from './FastComponent';
import { Suspense } from 'react';

export default function StreamingPage() {
  const renderTime = new Date().toISOString();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-mono font-bold text-zinc-900 dark:text-white mb-2">
                Streaming & Suspense
              </h1>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300">
                Send HTML in chunks • Improves perceived performance
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-100 text-sm font-mono font-medium rounded-full">
                Progressive
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-sm font-mono font-medium rounded-full">
                Server
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
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Streaming:</span>
                  <span className="font-mono text-sm bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-100 px-2 py-1 rounded">Enabled</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Suspense:</span>
                  <span className="font-mono text-sm bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded">Used</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Components:</span>
                  <span className="text-sm font-mono text-zinc-900 dark:text-white">Mixed Fast/Slow</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">What is Streaming?</h2>
              <div className="space-y-2 font-mono text-zinc-600 dark:text-zinc-300">
                <p>Streaming allows the browser to start rendering the page before all data is ready.</p>
                <p>Fast components render immediately, slow components show loading states.</p>
                <p>This improves perceived performance and user experience.</p>
              </div>
              <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg">
                <p className="text-sm font-mono text-cyan-800 dark:text-cyan-200">
                  <strong>Key Benefit:</strong> Users see content faster, even if some parts are still loading.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-8">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Page Components</h2>
            <div className="space-y-6">
              {/* Fast component renders immediately */}
              <div className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4">
                <h3 className="font-mono font-semibold text-zinc-900 dark:text-white mb-2">Fast Component</h3>
                <FastComponent />
              </div>

              {/* Slow component with Suspense boundary */}
              <div className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4">
                <h3 className="font-mono font-semibold text-zinc-900 dark:text-white mb-2">Slow Component (with Suspense)</h3>
                <Suspense fallback={
                  <div className="flex items-center space-x-3 p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-600"></div>
                    <span className="font-mono text-zinc-600 dark:text-zinc-300">Loading slow component...</span>
                  </div>
                }>
                  <SlowComponent />
                </Suspense>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-8">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Code Example</h2>
            <pre className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
{`import {{ Suspense }} from 'react';

export default function StreamingPage() {{
  return (
    <div>
      {/* Fast component renders immediately */}
      <FastComponent />
      
      {/* Slow component with Suspense boundary */}
      <Suspense fallback={{<div>Loading...</div>}}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}}

// Fast component - renders immediately
function FastComponent() {{
  return <div>Fast content loaded instantly!</div>;
}}

// Slow component - has artificial delay
async function SlowComponent() {{
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div>Slow content loaded after 2 seconds!</div>;
}}`}
              </code>
            </pre>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">When to Use Streaming</h2>
            <ul className="space-y-2 font-mono text-zinc-600 dark:text-zinc-300">
              <li>• Pages with mixed fast and slow data fetching</li>
              <li>• Large pages where users can start reading immediately</li>
              <li>• E-commerce sites with product listings and detailed info</li>
              <li>• News sites with headlines and full articles</li>
              <li>• Any page where immediate feedback improves UX</li>
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="/rsc" className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
              ← Back to RSC
            </a>
            <a href="/ppr" className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-mono">
              Next: PPR →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
