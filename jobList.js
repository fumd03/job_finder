import React from "react";
import JobCard from "./jobCard";

const JobList = ({ jobs, filter }) => {
  const filteredJobs = jobs.filter((job) => {
    return (
      (filter.location ? job.location.includes(filter.location) : true) &&
      (filter.jobType ? job.jobType === filter.jobType : true) &&
      (filter.salaryRange ? job.salary.includes(filter.salaryRange) : true)
    );
  });

  return (
    <div className="job-list">
      {" "}
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p> No jobs found with the selected filters. </p>
      )}{" "}
    </div>
  );
};

export default JobList;
