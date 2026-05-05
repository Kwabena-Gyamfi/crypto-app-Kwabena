function DemoWarningBanner() {
  return (
    <div className="w-full bg-amber-50 border-b-2 border-amber-400 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-amber-900">
              Educational Demo Project
            </p>
            <p className="text-xs text-amber-800 mt-0.5">
              This is a student project created for educational purposes only. It is <strong>not affiliated with Coinbase</strong> and is a demonstration of web development skills. Do not enter real personal information, passwords, or cryptocurrency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoWarningBanner;
