import React, { useState } from "react";

const JobCard = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="job-card">
      <h3> {job.title} </h3> <p> {job.company} </p> <p> {job.location} </p>{" "}
      <p> {job.salary} </p> <p> {job.jobType} </p>{" "}
      <button onClick={() => setShowDetails(!showDetails)}>
        {" "}
        {showDetails ? "Hide Details" : "Show Details"}{" "}
      </button>{" "}
      {showDetails && <p> {job.description} </p>}{" "}
    </div>
  );
};

export default JobCard;
