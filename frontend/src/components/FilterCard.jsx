import React,{useState} from "react";


const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Kolkata", "chennai", "hyderabad", "pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Full-Stack", "Frontend", "Backend"],
  },
  {
    filterType: "Salary",
    array: ["30k", "40k", "50k"],
  },
];
const jobList = [
  { title: "Frontend Developer", location: "Mumbai", industry: "Frontend", salary: "40k" },
  { title: "Backend Developer", location: "Pune", industry: "Backend", salary: "50k" },
  { title: "Full-Stack Developer", location: "Delhi", industry: "Full-Stack", salary: "30k" },
  { title: "Frontend Developer", location: "Delhi", industry: "Frontend", salary: "30k" },
];

export default function FilterCard() {
  const [filters, setFilters] = useState({
    Location: "",
    Industry: "",
    Salary: "",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  // const filteredJobs = jobList.filter((job) => {
  //   return (
  //     (!filters.Location || job.location === filters.Location) &&
  //     (!filters.Industry || job.industry === filters.Industry) &&
  //     (!filters.Salary || job.salary === filters.Salary)
  //   );
  // });
  return (
    <>
       <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Job Filters</h1>

      <div className="space-y-8 mb-8">
        {filterData.map((filter) => (
          <div key={filter.filterType} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{filter.filterType}</h2>
            {filter.array.map((option) => (
              <label key={option} className="block text-lg mb-2">
                <input
                  type="radio"
                  name={filter.filterType}
                  value={option}
                  checked={filters[filter.filterType] === option}
                  onChange={() => handleFilterChange(filter.filterType, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}
      </div>

      {/* filtered jobs */}

      {/* <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Filtered Jobs</h2>
        {filteredJobs.length > 0 ? (
          <ul>
            {filteredJobs.map((job, index) => (
              <li key={index} className="mb-3 p-3 border-b">
                <p className="text-lg font-semibold">{job.title}</p>
                <p>Location: {job.location}</p>
                <p>Industry: {job.industry}</p>
                <p>Salary: {job.salary}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No jobs found matching the selected filters.</p>
        )}
      </div> */}
    </div>

    </>
  );
}
