import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const { data } = await axios.get('http://localhost:5000/api/classes');
      setClasses(data);
    };
    fetchClasses();
  }, []);

  return (
    <div>
      <h2>Available Classes</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls._id}>{cls.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
