'use strict'

/**
 * Module Dependencies
*/

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
 
let HistorySchema = new Schema({
  
  historyId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  
  expenseId: {
    type: String,
    default: '',
  },

  expenseId: {
    type: String,
    default: '',
  },

  subExpenseId: {
    type: String,
    default: '',
  },

  key: {
    type: String,
    default: '',
  },
  
  expenseValues:[],
  
  createdOn: {
    type: Date,
    default: Date.now()
  },

})


mongoose.model('History', HistorySchema);