const mongoose = require('mongoose');

// Schema for users of app
const AnswersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    answers: {
        type: Array,
        default: [],
    },
},{
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: true
  });

// let Answers = mongoose.model('user_answers', AnswersSchema);
// Answers.createIndexes();

module.exports = mongoose.models.user_answers || mongoose.model('user_answers', AnswersSchema); 
