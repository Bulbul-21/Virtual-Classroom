import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Instructor Dashboard</h1>
      <Link to="/classes">View Classes</Link>
    </div>
  );
};

export default Dashboard;
