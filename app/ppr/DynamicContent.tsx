export default async function DynamicContent() {
  // Simulate dynamic content that takes time to load
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const data = {
    timestamp: new Date().toISOString(),
    message: 'Dynamic content loaded after 1.5 seconds'
  };

  return (
    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
      <h3 className="font-mono font-semibold text-zinc-900 dark:text-white mb-2">Dynamic Content Loaded!</h3>
      <p className="text-sm font-mono text-zinc-600 dark:text-zinc-300 mb-2">Timestamp: {data.timestamp}</p>
      <p className="text-sm font-mono text-zinc-600 dark:text-zinc-300">{data.message}</p>
      <div className="mt-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
        <p className="text-xs font-mono text-yellow-800 dark:text-yellow-200">
          This demonstrates how dynamic content can be streamed into a static page layout.
        </p>
      </div>
    </div>
  );
}
