function FilterBar({ searchTerm, setSearchTerm, workType, setWorkType }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row gap-4">
      {/* 1. Search Input */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search jobs by title or company..."
          className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          // When the user types, we update the search state instantly
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 2. Work Type Dropdown */}
      <div className="md:w-48">
        <select
          className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          value={workType}
          // When the user picks an option, we update the workType state
          onChange={(e) => setWorkType(e.target.value)}
        >
          <option value="All">All Work Types</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
