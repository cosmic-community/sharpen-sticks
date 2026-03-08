export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-100 mb-4 animate-pulse">
          <span className="text-3xl">🌿</span>
        </div>
        <p className="text-bark-500 font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  )
}