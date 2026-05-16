import { useState } from "react";
import JobCard from "./components/JobCard";
import FilterBar from "./components/FilterBar";

const JOBS_DATA = [
  {
    id: 1,
    title: "Junior React Developer",
    company: "Wrocław Tech Hub",
    salary: "8,000 - 12,000 PLN",
    tags: ["React", "JavaScript"],
    workType: "Remote",
    city: "Wrocław", // Make sure this matches the dropdown option exactly
  },
  {
    id: 2,
    title: "Frontend Intern",
    company: "Kraków Software House",
    salary: "5,000 - 7,000 PLN",
    tags: ["HTML", "CSS", "Tailwind"],
    workType: "Hybrid",
    city: "Kraków",
  },
  {
    id: 3,
    title: "Junior JavaScript Engineer",
    company: "Warsaw Startup",
    salary: "10,000 - 14,000 PLN",
    tags: ["Node.js", "React"],
    workType: "On-site",
    city: "Warsaw",
  },
  {
    id: 4,
    title: "Backend Engineer",
    company: "Allegro",
    salary: "12,000 - 18,000 PLN",
    tags: ["Node.js", "PostgreSQL"],
    workType: "Hybrid",
    city: "Kraków",
  },
  {
    id: 5,
    title: "Senior Fullstack Dev",
    company: "TechSolutions",
    salary: "18,000 - 24,000 PLN",
    tags: ["React", "Node.js", "AWS"],
    workType: "Remote",
    city: "Warsaw",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [workType, setWorkType] = useState("All");
  const [city, setCity] = useState("All"); // 1. New City State

  // 2. The upgraded multi-filter logic
  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = workType === "All" || job.workType === workType;

    const matchesCity = city === "All" || job.city === city; // New Condition

    // All 3 conditions must be true for the job to show up!
    return matchesSearch && matchesType && matchesCity;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            TechJobs <span className="text-blue-600">PL</span>
          </h1>
          <p className="text-slate-500 mt-2">
            The best tech jobs in Poland, all in one place.
          </p>
        </header>

        {/* 3. Pass the city state down */}
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          workType={workType}
          setWorkType={setWorkType}
          city={city}
          setCity={setCity}
        />

        <div className="mb-4 text-slate-500 font-medium">
          Found {filteredJobs.length}{" "}
          {filteredJobs.length === 1 ? "job" : "jobs"}
        </div>

        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
              <p className="text-slate-500 text-lg">
                No jobs match your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setWorkType("All");
                  setCity("All");
                }}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            filteredJobs.map((jobItem) => (
              <JobCard job={jobItem} key={jobItem.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
