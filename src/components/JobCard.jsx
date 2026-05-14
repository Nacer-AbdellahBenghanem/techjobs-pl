function JobCard({ job }) {
  // This function changes colors based on the workType
  const getWorkTypeBadge = (type) => {
    if (type === "Remote") return "bg-green-100 text-green-700";
    if (type === "Hybrid") return "bg-yellow-100 text-yellow-700";
    return "bg-slate-200 text-slate-700"; // For On-site
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-slate-800">{job.title}</h2>
          <p className="text-blue-600 font-medium">{job.company}</p>
        </div>
        <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">
          {job.salary}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {/* We use the function here for dynamic colors */}
        <span
          className={`text-xs font-bold px-2 py-1 rounded ${getWorkTypeBadge(job.workType)}`}
        >
          {job.workType}
        </span>

        {/* This loops through our tags (React, HTML, etc.) */}
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className="w-full mt-6 bg-slate-900 text-white py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
        View Job
      </button>
    </div>
  );
}

export default JobCard;
