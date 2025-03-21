import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JobListings = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/jobs") // Ensure this is the correct API URL
            .then((res) => setJobs(res.data))
            .catch((err) => console.error("Error fetching jobs:", err));
    }, []);

    return (
        <div className="jobs-container">
            <h2>Available Jobs</h2>
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <Link to={`/job/${job._id}`} key={job._id} className="job-card">
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        <p>Salary: ${job.salary}</p>
                    </Link>
                ))
            ) : (
                <p>No job listings available at the moment.</p>
            )}
        </div>
    );
};

export default JobListings;
