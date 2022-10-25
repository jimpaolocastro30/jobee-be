const mongoose = require('mongoose');
const crypto = require('crypto');

const jobeeTransSchema = new mongoose.Schema(
    { 
      transNumber: {
        type: String,
      },
      orderNumber: {
      type: String,
    },
      doorNumber: {
      type: String,
    },
      timeIn: {
      type: Date,
    },
      timeOut: {
      type: Date,
    },
     duration: {
      type: String,
    },
    vendor: {
      type: String,
    },
    status: {
      type: String,
    },
    serviceType: {
      type: String,
    },
      DateCreated:{
      type:Date
    },
    },
    { timestamp: true }
);

module.exports = mongoose.model('jobeeTransaction', jobeeTransSchema);
