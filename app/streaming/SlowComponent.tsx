export default async function SlowComponent() {
  // Increased delay to make it even slower (4 seconds)
  await new Promise(resolve => setTimeout(resolve, 4000));
  
  const data = {
    timestamp: new Date().toISOString(),
    message: 'This slow component took 4 seconds to load (even slower)'
  };

  return (
    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
      <h3 className="font-mono font-semibold text-zinc-900 dark:text-white mb-2">Slow Component Loaded (Very Slow)!</h3>
      <p className="text-sm font-mono text-zinc-600 dark:text-zinc-300 mb-2">Timestamp: {data.timestamp}</p>
      <p className="text-sm font-mono text-zinc-600 dark:text-zinc-300">{data.message}</p>
      <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
        <p className="text-xs font-mono text-green-800 dark:text-green-200">
          This component now takes 4 seconds to load, making the streaming behavior more pronounced.
        </p>
      </div>
    </div>
  );
}
