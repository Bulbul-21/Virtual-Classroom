// models/Class.js
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  className: { type: String, required: true },
  instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  units: [{
    unitName: String,
    sessions: [{
      sessionName: String,
      lectures: [String],
      comments: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: String,
        replies: [{
          userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
          text: String
        }]
      }]
    }]
  }]
});

module.exports = mongoose.model('Class', classSchema);
