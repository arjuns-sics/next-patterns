// React Server Components (RSC)
// Concept: Default in App Router. Components render on the server.
// How to demonstrate: Fetch data directly in component, no 'use client'
// Teaching points: Smaller JS bundles, secure data access, cannot use browser-only APIs

async function getData() {
  // This fetch happens on the server during rendering
  const res = await fetch('http://localhost:3000/api/time', { 
    cache: 'no-store' // Using no-store to show fresh data each time
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function RSCPage() {
  const data = await getData();
  const renderTime = new Date().toISOString();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-mono font-bold text-zinc-900 dark:text-white mb-2">
                React Server Components (RSC)
              </h1>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300">
                Default in App Router • Components render on server
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 text-sm font-mono font-medium rounded-full">
                Server
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 text-sm font-mono font-medium rounded-full">
                No JS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Server-Rendered Data</h2>
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
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Component Type:</span>
                  <span className="font-mono text-sm bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 px-2 py-1 rounded">Server</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">JS Bundle Size:</span>
                  <span className="text-sm font-mono text-zinc-900 dark:text-white">Minimal</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Browser APIs:</span>
                  <span className="text-sm font-mono text-red-600 dark:text-red-400">Not Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-8">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Code Example</h2>
            <pre className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
{`// No 'use client' directive - this is a Server Component
async function getData() {{
  // This fetch happens on the server during rendering
  const res = await fetch('http://localhost:3000/api/time', {{ 
    cache: 'no-store' 
  }});
  return res.json();
}}

export default async function RSCPage() {{
  const data = await getData();
  
  // Component renders on server
  // Data fetched during server rendering
  // No JavaScript sent to browser for this component
}}`}
              </code>
            </pre>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Benefits of RSC</h2>
            <ul className="space-y-2 font-mono text-zinc-600 dark:text-zinc-300">
              <li>• <strong>Smaller JavaScript bundles:</strong> Server components don't send JS to the browser</li>
              <li>• <strong>Better performance:</strong> Faster initial page loads</li>
              <li>• <strong>Enhanced security:</strong> Sensitive data and logic stay on server</li>
              <li>• <strong>Better SEO:</strong> Full HTML rendered on server</li>
              <li>• <strong>Reduced client-side computation:</strong> Heavy processing happens on server</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="text-sm font-mono text-gray-800 dark:text-gray-200">
                <strong>Key Limitation:</strong> Cannot use browser-only APIs like window, document, or localStorage. 
                Cannot use useState, useEffect, or other client-side React hooks.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="/csr" className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
              ← Back to CSR
            </a>
            <a href="/streaming" className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-mono">
              Next: Streaming →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
