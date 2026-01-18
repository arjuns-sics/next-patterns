import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-6 bg-white dark:bg-black">
        <div className="w-full max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={24}
              priority
            />
            <div className="flex gap-4">
              <a
                href="https://nextjs.org/docs"
                className="px-4 py-2 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js Docs
              </a>
              <a
                href="https://react.dev"
                className="px-4 py-2 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Docs
              </a>
            </div>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Next.js Rendering Patterns
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              This project demonstrates all major rendering patterns in modern Next.js (App Router, Next.js 13+ / 14+). 
              Each route showcases a different rendering strategy with clear explanations and visual indicators.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Static Site Generation (SSG)</h2>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300 mb-4">Rendered at build time. Fastest possible response.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-mono bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">Build Time</span>
                <span className="px-2 py-1 text-xs font-mono bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">Static</span>
              </div>
              <a href="/ssg" className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
                View Demo
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Server-Side Rendering (SSR)</h2>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300 mb-4">Rendered on every request. Always fresh data.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-mono bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded">Every Request</span>
                <span className="px-2 py-1 text-xs font-mono bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded">Dynamic</span>
              </div>
              <a href="/ssr" className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
                View Demo
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Incremental Static Regeneration (ISR)</h2>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300 mb-4">Static page that revalidates in the background.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-mono bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded">Timed Revalidation</span>
                <span className="px-2 py-1 text-xs font-mono bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">Static</span>
              </div>
              <a href="/isr" className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
                View Demo
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Client-Side Rendering (CSR)</h2>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300 mb-4">Rendering happens in the browser. JS required.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-mono bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">Browser</span>
                <span className="px-2 py-1 text-xs font-mono bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded">Interactive</span>
              </div>
              <a href="/csr" className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
                View Demo
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">React Server Components (RSC)</h2>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300 mb-4">Default in App Router. Components render on server.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-mono bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">Server</span>
                <span className="px-2 py-1 text-xs font-mono bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded">No JS</span>
              </div>
              <a href="/rsc" className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
                View Demo
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Streaming & Suspense</h2>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300 mb-4">Send HTML in chunks. Improves perceived performance.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-mono bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 rounded">Progressive</span>
                <span className="px-2 py-1 text-xs font-mono bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">Server</span>
              </div>
              <a href="/streaming" className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
                View Demo
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Partial Prerendering (PPR)</h2>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300 mb-4">Hybrid of static + dynamic. Static shell, dynamic holes.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-mono bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded">Mixed</span>
                <span className="px-2 py-1 text-xs font-mono bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded">Static</span>
              </div>
              <a href="/ppr" className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
                View Demo
              </a>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Server Actions</h2>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300 mb-4">Run server code from forms or buttons. No API routes required.</p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-mono bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded">Mutations</span>
                <span className="px-2 py-1 text-xs font-mono bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded">Secure</span>
              </div>
              <a href="/server-actions" className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
                View Demo
              </a>
            </div>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Rendering Patterns Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    <th className="text-left py-2 px-4 font-medium text-zinc-900 dark:text-white">Pattern</th>
                    <th className="text-left py-2 px-4 font-medium text-zinc-900 dark:text-white">Where Rendered</th>
                    <th className="text-left py-2 px-4 font-medium text-zinc-900 dark:text-white">Cached</th>
                    <th className="text-left py-2 px-4 font-medium text-zinc-900 dark:text-white">SEO</th>
                    <th className="text-left py-2 px-4 font-medium text-zinc-900 dark:text-white">JS Sent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">SSG</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Build</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Yes</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Yes</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Minimal</td>
                  </tr>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">SSR</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Server</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">No</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Yes</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Minimal</td>
                  </tr>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">ISR</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Server</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Timed</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Yes</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Minimal</td>
                  </tr>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">CSR</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Browser</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">No</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">No</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Full</td>
                  </tr>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">RSC</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Server</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Optional</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Yes</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">None</td>
                  </tr>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Streaming</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Server</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Optional</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Yes</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Minimal</td>
                  </tr>
                  <tr className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">PPR</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Mixed</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Partial</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Yes</td>
                    <td className="py-2 px-4 font-mono text-zinc-700 dark:text-zinc-300">Minimal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
