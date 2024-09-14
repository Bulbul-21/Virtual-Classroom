// routes/class.js
const express = require('express');
const Class = require('../models/Class');
const auth = require('../middleware/auth');
const router = express.Router();

// Create Class (Instructor only)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'instructor') return res.status(403).json({ message: 'Access denied' });

  const { className, units } = req.body;
  try {
    const newClass = new Class({
      className,
      instructorId: req.user.id,
      units
    });
    await newClass.save();
    res.json(newClass);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Enroll in Class (Student)
router.post('/:classId/enroll', auth, async (req, res) => {
  if (req.user.role !== 'student') return res.status(403).json({ message: 'Access denied' });

  try {
    const classroom = await Class.findById(req.params.classId);
    if (!classroom) return res.status(404).json({ message: 'Class not found' });

    await User.findByIdAndUpdate(req.user.id, { $push: { enrolledClasses: classroom._id } });
    res.json({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
