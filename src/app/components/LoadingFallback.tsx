export function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-900"></div>
          {/* Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 dark:border-t-cyan-400 animate-spin"></div>
          {/* Inner Circle */}
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500"></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Loading Scipy Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
          Please wait...
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
