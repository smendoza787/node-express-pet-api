var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PetSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of your pet'
  },
  type: {
    type: String,
    required: 'Please enter the type of your pet'
  },
  status: {
    type: [{
      type: String,
      enum: ['hungry', 'happy', 'sleepy']
    }],
    default: ['happy']
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pet', PetSchema);
