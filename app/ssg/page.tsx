import Image from "next/image";

// Static Site Generation (SSG)
// Concept: Page rendered at build time. Fastest possible response.
// How to implement: Default behavior in App Router. Use fetch() with cache: 'force-cache'
// Teaching points: Happens at build time, no per-request computation, best for marketing pages, docs

async function getData() {
  // This fetch will be cached at build time
  const res = await fetch('http://localhost:3000/api/time', { 
    cache: 'force-cache' 
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function SSGPage() {
  const data = await getData();
  const renderTime = new Date().toISOString();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-mono font-bold text-zinc-900 dark:text-white mb-2">
                Static Site Generation (SSG)
              </h1>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300">
                Rendered at build time • Fastest possible response
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 text-sm font-mono font-medium rounded-full">
                Build Time
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-sm font-mono font-medium rounded-full">
                Static
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Data from Build Time</h2>
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
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Render Information</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Page Rendered:</span>
                  <span className="font-mono text-sm text-zinc-900 dark:text-white">{renderTime}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Cache Strategy:</span>
                  <span className="font-mono text-sm bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 px-2 py-1 rounded">force-cache</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Data Freshness:</span>
                  <span className="text-sm font-mono text-zinc-900 dark:text-white">Static (from build)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-8">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Code Example</h2>
            <pre className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
{`// This fetch will be cached at build time
const res = await fetch('http://localhost:3000/api/time', {{ 
  cache: 'force-cache' 
}});

// Data is fetched once at build time and cached
// No per-request computation
// Fastest possible response time`}
              </code>
            </pre>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">When to Use SSG</h2>
            <ul className="space-y-2 font-mono text-zinc-600 dark:text-zinc-300">
              <li>• Marketing pages and landing pages</li>
              <li>• Documentation sites</li>
              <li>• Blog posts and articles</li>
              <li>• E-commerce product pages (if data doesn't change frequently)</li>
              <li>• Any content that doesn't need to be personalized per user</li>
            </ul>
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-sm font-mono text-green-800 dark:text-green-200">
                <strong>Key Benefit:</strong> Pages are pre-rendered and served as static HTML files, providing the fastest possible load times.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="/" className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
              ← Back to Home
            </a>
            <a href="/ssr" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-mono">
              Next: SSR →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
