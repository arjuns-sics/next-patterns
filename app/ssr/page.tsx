// Server-Side Rendering (SSR)
// Concept: Rendered on every request. Always fresh data.
// How to implement: Use cache: 'no-store'
// Teaching points: Runs on server for every request, useful for dashboards, auth-based pages

async function getData() {
  // This fetch will NOT be cached - fresh data on every request
  const res = await fetch('http://localhost:3000/api/time', { 
    cache: 'no-store' 
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function SSRPage() {
  const data = await getData();
  const renderTime = new Date().toISOString();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-mono font-bold text-zinc-900 dark:text-white mb-2">
                Server-Side Rendering (SSR)
              </h1>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300">
                Rendered on every request • Always fresh data
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100 text-sm font-mono font-medium rounded-full">
                Every Request
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 text-sm font-mono font-medium rounded-full">
                Dynamic
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Fresh Data from Server</h2>
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
                  <span className="font-mono text-sm bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100 px-2 py-1 rounded">no-store</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Data Freshness:</span>
                  <span className="text-sm font-mono text-zinc-900 dark:text-white">Always Fresh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-8">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Code Example</h2>
            <pre className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
{`// This fetch will NOT be cached
const res = await fetch('http://localhost:3000/api/time', {{ 
  cache: 'no-store' 
}});

// Data is fetched fresh on every request
// Runs on server for every request
// Always provides up-to-date information`}
              </code>
            </pre>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">When to Use SSR</h2>
            <ul className="space-y-2 font-mono text-zinc-600 dark:text-zinc-300">
              <li>• User dashboards with personalized data</li>
              <li>• E-commerce sites with real-time inventory</li>
              <li>• News sites with frequently updated content</li>
              <li>• Pages that need to be personalized per user</li>
              <li>• Content that changes frequently and must be up-to-date</li>
            </ul>
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm font-mono text-red-800 dark:text-red-200">
                <strong>Key Benefit:</strong> Always serves fresh, up-to-date content by rendering on every request.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="/ssg" className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
              ← Back to SSG
            </a>
            <a href="/isr" className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-mono">
              Next: ISR →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
