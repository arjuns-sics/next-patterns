export default async function FastComponent() {
  // Added delay to make it slower (1 second)
  await new Promise(resolve => setTimeout(resolve, 1000));

  const data = {
    timestamp: new Date().toISOString(),
    message: 'This component took 1 second to load (previously fast)'
  };

  return (
    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700">
      <h3 className="font-mono font-semibold text-zinc-900 dark:text-white mb-2">Component Loaded (Slower)</h3>
      <p className="text-sm font-mono text-zinc-600 dark:text-zinc-300 mb-2">Timestamp: {data.timestamp}</p>
      <p className="text-sm font-mono text-zinc-600 dark:text-zinc-300">{data.message}</p>
      <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
        <p className="text-xs font-mono text-blue-800 dark:text-blue-200">
          This component now loads in 1 second to better demonstrate streaming behavior.
        </p>
      </div>
    </div>
  );
}
