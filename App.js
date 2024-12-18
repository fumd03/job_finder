import React, { useState } from "react";
import "./App.css";
import jobs from "./jobs";
import JobList from "./jobList";
import Filter from "./Filter";

function App() {
  const [filter, setFilter] = useState({
    location: "",
    jobType: "",
    salaryRange: "",
  });

  return (
    <div className="App">
      <h1> Job Finder </h1> <Filter filter={filter} setFilter={setFilter} />{" "}
      <JobList jobs={jobs} filter={filter} />{" "}
    </div>
  );
}

export default App;
