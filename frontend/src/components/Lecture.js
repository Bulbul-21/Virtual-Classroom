import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lecture = ({ match }) => {
  const [lectures, setLectures] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchLectures = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/classes/${match.params.id}/lectures`);
      setLectures(data);
    };
    fetchLectures();
  }, [match.params.id]);

  const addComment = async (lectureId) => {
    await axios.post(`http://localhost:5000/api/lectures/${lectureId}/comments`, {
      comment: newComment,
    });
    setNewComment('');
    // Reload comments after posting
  };

  return (
    <div>
      <h2>Lectures</h2>
      <ul>
        {lectures.map((lecture) => (
          <li key={lecture._id}>
            {lecture.title}
            <ul>
              {lecture.comments.map((comment) => (
                <li key={comment._id}>{comment.text}</li>
              ))}
            </ul>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={() => addComment(lecture._id)}>Add Comment</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lecture;
