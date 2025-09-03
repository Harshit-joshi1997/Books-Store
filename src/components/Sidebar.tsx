import React from "react";

type SidebarProps = {
  filters: {
    author: string;
    subject: string;
    publishYear: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      author: string;
      subject: string;
      publishYear: string;
    }>
  >;
  onSearch: () => void | Promise<void>;
};

export default function Sidebar({ filters, setFilters, onSearch }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-gray-100 p-7 mt-8 -ml-17">
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      {/* Author */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Author Name
        </label>
        <input
          type="text"
          value={filters.author}
          onChange={(e) => setFilters((f) => ({ ...f, author: e.target.value }))}
          placeholder="Enter author"
          className="w-full rounded-lg p-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          value={filters.subject}
          onChange={(e) => setFilters((f) => ({ ...f, subject: e.target.value }))}
          placeholder="Enter subject"
          className="w-full rounded-lg p-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Publish Year */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Publish Year
        </label>
        <input
          type="number"
          value={filters.publishYear}
          onChange={(e) =>
            setFilters((f) => ({ ...f, publishYear: e.target.value }))
          }
          placeholder="e.g. 2023"
          className="w-full rounded-lg p-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Search Button */}
      <button
        onClick={onSearch}
        className="w-full py-2 rounded-lg text-white font-medium
             bg-gradient-to-r from-blue-600 to-blue-800
             hover:from-blue-600 hover:to-blue-900
             transition duration-300 ease-in-out"
      >
        Search
      </button>
    </div>
  );
}
