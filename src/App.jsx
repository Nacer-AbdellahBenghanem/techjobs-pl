import JobCard from "./components/JobCard";

// 1. We create our array of fake data here
const JOBS_DATA = [
  {
    id: 1,
    title: "Junior React Developer",
    company: "Wrocław Tech Hub",
    salary: "8,000 - 12,000 PLN",
    tags: ["React", "JavaScript"],
    workType: "Remote",
  },
  {
    id: 2,
    title: "Frontend Intern",
    company: "Kraków Software House",
    salary: "5,000 - 7,000 PLN",
    tags: ["HTML", "CSS", "Tailwind"],
    workType: "Hybrid",
  },
  {
    id: 3,
    title: "Junior JavaScript Engineer",
    company: "Warsaw Startup",
    salary: "10,000 - 14,000 PLN",
    tags: ["Node.js", "React"],
    workType: "On-site",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* 2. This is the new header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            TechJobs <span className="text-blue-600">PL</span>
          </h1>
          <p className="text-slate-500 mt-2">
            The best tech jobs in Poland, all in one place.
          </p>
        </header>

        {/* 3. This maps over our array and creates a card for each job */}
        <div className="space-y-4">
          {JOBS_DATA.map((jobItem) => (
            <JobCard job={jobItem} key={jobItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
