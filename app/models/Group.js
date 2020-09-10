'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
 
let GroupSchema = new Schema({
  groupId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },

  groupName: {
    type: String,
    default: ''
  },

  groupCreatorId: {
    type: String,
    default: ''
  },
  groupCreatorName: {
    type: String,
    default: ''
  },
  groupMember:[{
    groupMemberId:{
      type:String,
      default: ''
    },
    groupMemberName:{
      type:String,
      default: ''
    }
  }],

  groupCreatedOn :{
    type:Date,
    default:""
  },
 
})


mongoose.model('Group', GroupSchema);