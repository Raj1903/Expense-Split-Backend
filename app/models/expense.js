'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
 
let ExpenseSchema = new Schema({
  
  groupId: {
    type: String,
    default: '',
  },
  expenseId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },

  expenseTitle: {
    type: String,
    default: ''
  },

  expenseCreatorId: {
    type: String,
    default: ''
  },
  expenseCreatorName: {
    type: String,
    default: ''
  },
  
  expenseCreatedOn :{
    type:Date,
    default:""
  },
 /* 
  expenseModifiedOn :{
    type:Date,
    default:""
  },
*/
  epenseAmount: {
    type:String,
    default:''
  },
/*
  expenseMemberId: {
    type: String,
    default: ''
  },
  expenseMemberName: {
    type: String,
    default: ''
  },
*/


  expenseDone:{
    type:String,
    default:'no'
  },
/*
  subExpenses:{ 
    type:[{
      
      subExpenseId: {
        type: String,
        default: '',
      },
    
      subExpenseName: {
        type: String,
        default: ''
      },
    
      subExpenseCreatorId: {
        type: String,
        default: ''
      },
      subExpenseCreatorName: {
        type: String,
        default: ''
      },
      
      subExpenseCreatedOn :{
        type:Date,
        default:""
      },
      subExpenseModifiedOn :{
        type:Date,
        default:""
      },
    
      subExpenseMemberId: {
        type: String,
        default: ''
      },
      subExpenseMemberName: {
        type: String,
        default: ''
      },

      subExpenseDone:{
        type:String,
        default:'no'
      },
    
          
    }]//subexpense array end
  }//subexpenses end
*/
})


mongoose.model('Expense', ExpenseSchema);