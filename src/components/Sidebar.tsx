

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-200 p-6  mt-8 -ml-18">
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      {/* Author */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Author Name
        </label>
        <input
          type="text"
          placeholder="Enter author"
          className="w-full rounded-lg border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          placeholder="Enter subject"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Publish Year */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Publish Year
        </label>
        <input
          type="number"
          placeholder="e.g. 2023"
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Search Button */}
      <button className="w-full py-2 rounded-lg text-white font-medium
             bg-gradient-to-r from-blue-600 to-blue-800
             hover:from-blue-600 hover:to-blue-900
             transition duration-300 ease-in-out">
        Search
      </button>
    </div>
  );
}
