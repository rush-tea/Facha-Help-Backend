const mongoose = require("mongoose");

const AnswerSchema = mongoose.Schema({
  ques_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  a_body: {
    type: String,
    required: true,
  },
  writer_name: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Answer", AnswerSchema);
