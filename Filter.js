import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <h3> Filters </h3> <label> Location: </label>{" "}
      <input
        type="text"
        value={filter.location}
        onChange={(e) => setFilter({ ...filter, location: e.target.value })}
      />{" "}
      <label> Job Type: </label>{" "}
      <select
        value={filter.jobType}
        onChange={(e) => setFilter({ ...filter, jobType: e.target.value })}
      >
        <option value=""> Any </option>{" "}
        <option value="Full-time"> Full - time </option>{" "}
        <option value="Part-time"> Part - time </option>{" "}
        <option value="Contract"> Contract </option>{" "}
      </select>{" "}
      <label> Salary Range: </label>{" "}
      <input
        type="text"
        value={filter.salaryRange}
        onChange={(e) => setFilter({ ...filter, salaryRange: e.target.value })}
      />{" "}
    </div>
  );
};

export default Filter;
