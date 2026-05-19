import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import JobCard from "./components/JobCard";
import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";

const formatJobCount = (count) => {
  if (count >= 1000) return `${Math.floor(count / 1000)}k+`;
  if (count >= 100) return `${Math.floor(count / 100) * 100}+`;
  return count;
};

function App() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [workType, setWorkType] = useState("All");
  const [city, setCity] = useState("All");
  const [visibleCount, setVisibleCount] = useState(10);
  const [studentMode, setStudentMode] = useState(false);

  useEffect(() => {
    fetch("https://techjobs-api-rkmq.onrender.com/jobs")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          setJobs([]);
        }
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const filteredJobs = Array.isArray(jobs)
    ? jobs.filter((job) => {
        const matchesSearch =
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = workType === "All" || job.workType === workType;
        const matchesCity = city === "All" || job.city === city;

        let matchesStudent = true;
        if (studentMode) {
          const titleLower = job.title.toLowerCase();

          // An aggressive, multi-lingual keyword matrix for entry-level positions
          matchesStudent =
            job.seniority === "junior" ||
            job.seniority === "trainee" ||
            titleLower.includes("junior") ||
            titleLower.includes("intern") ||
            titleLower.includes("staż") ||
            titleLower.includes("staz") ||
            titleLower.includes("trainee") ||
            titleLower.includes("młodszy") ||
            titleLower.includes("mlodszy") ||
            titleLower.includes("praktyk") ||
            titleLower.includes("graduate") ||
            titleLower.includes("student");
        }

        return matchesSearch && matchesType && matchesCity && matchesStudent;
      })
    : [];

  useEffect(() => {
    setVisibleCount(10);
  }, [searchTerm, workType, city, studentMode]);

  const jobsToShow = filteredJobs.slice(0, visibleCount);

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

          {/* Custom Student Target Switch */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-semibold ${studentMode ? "text-slate-400" : "text-slate-800"}`}
            >
              All Listings
            </span>
            <button
              onClick={() => setStudentMode(!studentMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${studentMode ? "bg-blue-600" : "bg-slate-300"}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${studentMode ? "translate-x-6" : "translate-x-1"}`}
              />
            </button>
            <span
              className={`text-sm font-semibold flex items-center gap-1 ${studentMode ? "text-blue-600" : "text-slate-400"}`}
            >
              🎓 Jobs Made for Students
            </span>
          </div>
        </header>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          workType={workType}
          setWorkType={setWorkType}
          city={city}
          setCity={setCity}
        />

        {/* Clean, minimalist counter block */}
        <div className="mb-4 text-slate-500 font-medium">
          Total Jobs: {formatJobCount(filteredJobs.length)}{" "}
          {studentMode && "(Jobs Made for Students)"}
        </div>

        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
              <p className="text-slate-500 text-lg">
                No positions match your parameters.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setWorkType("All");
                  setCity("All");
                  setStudentMode(false);
                }}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            jobsToShow.map((jobItem) => (
              <JobCard job={jobItem} key={jobItem.id} />
            ))
          )}
        </div>

        {filteredJobs.length > visibleCount && (
          <div className="text-center mt-8 mb-12">
            <button
              onClick={() => setVisibleCount((prevCount) => prevCount + 10)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all"
            >
              See More Offers
            </button>
          </div>
        )}
      </div>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
