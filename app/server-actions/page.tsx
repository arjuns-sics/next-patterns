// Server Actions
// Concept: Run server code from forms or buttons. No API routes required.
// How to implement: Use 'use server' directive
// Teaching points: Replaces many REST endpoints, secure mutations

'use server';

import { revalidatePath } from 'next/cache';

async function handleSubmit(formData: FormData) {
  'use server';
  
  const message = formData.get('message') as string;
  const timestamp = new Date().toISOString();
  
  // Simulate saving to database
  console.log('Saving message:', message, 'at', timestamp);
  
  // Revalidate the page to show updated data
  revalidatePath('/server-actions');
  
  // Server Actions should not return values for form submissions
  // They work by mutating state and revalidating paths
}

export default async function ServerActionsPage() {
  const renderTime = new Date().toISOString();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-mono font-bold text-zinc-900 dark:text-white mb-2">
                Server Actions
              </h1>
              <p className="text-lg font-mono text-zinc-600 dark:text-zinc-300">
                Run server code from forms • No API routes required
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100 text-sm font-mono font-medium rounded-full">
                Mutations
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 text-sm font-mono font-medium rounded-full">
                Secure
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
              <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Form Example</h2>
              <form action={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="message" className="block text-sm font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Enter a message:
                  </label>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Type something..."
                    className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white font-mono"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-purple-600 text-white font-mono font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
                >
                  Submit Message
                </button>
              </form>
              
              <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <p className="text-xs font-mono text-purple-800 dark:text-purple-200">
                  This form demonstrates how Server Actions handle form submissions directly without API routes.
                </p>
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
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Server Actions:</span>
                  <span className="font-mono text-sm bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100 px-2 py-1 rounded">Enabled</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Form Handling:</span>
                  <span className="font-mono text-sm bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100 px-2 py-1 rounded">Direct</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                  <span className="text-sm font-mono text-zinc-600 dark:text-zinc-300">Security:</span>
                  <span className="text-sm font-mono text-zinc-900 dark:text-white">Built-in CSRF protection</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-8">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Code Example</h2>
            <pre className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono text-zinc-800 dark:text-zinc-200">
{`'use server';

import {{ revalidatePath }} from 'next/cache';

async function handleSubmit(formData: FormData) {{
  'use server';
  
  const message = formData.get('message') as string;
  
  // Process the form data on the server
  console.log('Saving message:', message);
  
  // Revalidate the page to show updated data
  revalidatePath('/server-actions');
  
  return {{
    success: true,
    message: 'Message saved successfully!'
  }};
}}

export default function ServerActionsPage() {{
  return (
    <form action={{handleSubmit}}>
      <input type="text" name="message" />
      <button type="submit">Submit</button>
    </form>
  );
}}`}
              </code>
            </pre>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-xl font-mono font-semibold text-zinc-900 dark:text-white mb-4">Benefits of Server Actions</h2>
            <ul className="space-y-2 font-mono text-zinc-600 dark:text-zinc-300">
              <li>• <strong>No API routes needed:</strong> Handle form submissions directly in components</li>
              <li>• <strong>Enhanced security:</strong> Built-in CSRF protection and server-side validation</li>
              <li>• <strong>Better performance:</strong> Reduced network requests and faster form handling</li>
              <li>• <strong>Simplified architecture:</strong> Less boilerplate code for form handling</li>
              <li>• <strong>Type safety:</strong> Full TypeScript support for form data</li>
            </ul>
            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
              <p className="text-sm font-mono text-purple-800 dark:text-purple-200">
                <strong>Key Benefit:</strong> Server Actions provide a simpler, more secure way to handle form submissions and mutations without the complexity of traditional API routes.
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="/ppr" className="px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors font-mono">
              ← Back to PPR
            </a>
            <a href="/" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-mono">
              Back to Home →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
