// Incremental Static Regeneration (ISR)
// Concept: Static page that revalidates in the background. Combines SSG speed + freshness.
// How to implement: Use next: { revalidate: 10 }
// Teaching points: Page is cached, rebuilt after interval, old content served while revalidating

async function getData() {
  // This fetch will be cached but revalidated every 10 seconds
  const res = await fetch('http://localhost:3000/api/time', { 
    next: { revalidate: 10 } 
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function ISRPage() {
  const data = await getData();
  const renderTime = new Date().toISOString();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-mono font-bold text-zinc-900 dark:text-white mb-2">
                Incremental Static Regeneration (ISR)
              </h1>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300">
                Static page with background revalidation • Best of both worlds
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 text-sm font-mono font-medium rounded-full">
                Timed Revalidation
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 text-sm font-mono font-medium rounded-full">
                Static
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Data with ISR</h2>
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
                  <span className="font-mono text-sm bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 px-2 py-1 rounded">revalidate: 10</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Revalidation:</span>
                  <span className="text-sm font-mono text-zinc-900 dark:text-white">Every 10 seconds</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Data Freshness:</span>
                  <span className="text-sm font-mono text-zinc-900 dark:text-white">Up to 10s old</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-8">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Code Example</h2>
            <pre className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
{`// This fetch will be cached but revalidated every 10 seconds
const res = await fetch('http://localhost:3000/api/time', {{ 
  next: {{ revalidate: 10 }} 
}});

// Page is cached for 10 seconds
// After 10 seconds, next request triggers revalidation
// Old content served while new content is being generated`}
              </code>
            </pre>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">When to Use ISR</h2>
            <ul className="space-y-2 font-mono text-zinc-600 dark:text-zinc-300">
              <li>• E-commerce product pages with inventory updates</li>
              <li>• News articles that update occasionally</li>
              <li>• Blog posts with comments that update</li>
              <li>• Any content that needs to be fresh but not real-time</li>
              <li>• Pages where you want SSG performance with some freshness</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm font-mono text-yellow-800 dark:text-yellow-200">
                <strong>Key Benefit:</strong> Combines the speed of SSG with the freshness of SSR. Pages are cached but automatically updated in the background.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="/ssr" className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
              ← Back to SSR
            </a>
            <a href="/csr" className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-mono">
              Next: CSR →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
