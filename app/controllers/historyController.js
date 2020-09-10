const mongoose = require('mongoose');
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib')
const shortid = require('shortid');
const time = require('../libs/timeLib');


/* Models */
const HistoryModel = mongoose.model('History')
const ExpenseModel = mongoose.model('Expense')


// start addHistoryFunction 
/* params: key , value */

let addHistoryFunction = (req, res) => {
    console.log(req.body)

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.expenseId) {
                resolve(req)
            } else {
                logger.error('Field Missing During History Creation', 'HistoryController: addHistoryFunctio()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }// end validate user input 

    let findExpenses = () => {
        return new Promise((resolve, reject) => {
            if(req.body.key){
                resolve(null)
            }
            else{
                ExpenseModel.findOne({ expenseId: req.body.expenseId })
                .select()
                .lean()
                .exec((err, ExpenseDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Expense Controller: getExpenseDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Expenses', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ExpenseDetails)) {
                        logger.info('No Expense Found', 'Expense  Controller:getExpenseDetailsFunction')
                        let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                        //reject(apiResponse)
                        resolve(ExpenseDetails)
                    } else {
                        let apiResponse = response.generate(false, 'Expense Found', 200, ExpenseDetails)
                        resolve(ExpenseDetails)
                    }
                })
            }
        })
    }// end findExpenses
 
    let updateHistory = (ExpenseDetails) => {
        console.log('updating history')
        return new Promise((resolve, reject) => {
            let newHistory = new HistoryModel({
                historyId: shortid.generate(),
                expenseId: req.body.expenseId,
                key: req.body.key,
                createdOn: time.now(),
                expenseId:req.body.expenseId,
                // subExpenseId:req.body.subExpenseId
            })

           // newHistory.expenseValues = ExpenseDetails

            newHistory.save((err, newExpense) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'HistoryController: addExpense', 10)
                    let apiResponse = response.generate(true, 'Failed to add history Expense', 500, null)
                    reject(apiResponse)
                } else {
                    let newExpenseObj = newExpense.toObject();
                    resolve(newExpenseObj)
                }
            })

        })
    }// end updateHistory function


    validateUserInput(req, res)
        .then(findExpenses)
        .then(updateHistory)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'History Added', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end addHistoryFunction 

// start deleteHistoryFunction

let deleteHistoryFunction = (req, res) => {

    let findHistory = () => {
        return new Promise((resolve, reject) => {
            HistoryModel.findOne({ expenseId: req.body.expenseId }).sort({ $natural: -1 })
                .select()
                .lean()
                .exec((err, HistoryDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'History Controller: v', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Expense Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(HistoryDetails)) {
                        logger.info('No Histoy Found', 'History  Controller:findHistory')
                        let apiResponse = response.generate(true, 'No History Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'History Found', 200, HistoryDetails)
                        resolve(HistoryDetails)
                    }
                })
        })
    }// end findHistory

    let updateHistory = (HistoryDetails) => {
        return new Promise((resolve, reject) => {

            HistoryModel.findOneAndRemove({ historyId: HistoryDetails.historyId }).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Expense Controller: deleteExpense', 10)
                    let apiResponse = response.generate(true, 'Failed To delete Expense', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Expense Found', 'Expense Controller: deleteExpense')
                    let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'History Deleted', 200, HistoryDetails)
                    resolve(apiResponse)
                }
            });// end find and remove

        })
    }// end updateHistory function

    findHistory(req, res)
        .then(updateHistory)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'History Deleted', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end deleteHistoryFunction 


let getHistoryFunction = (req, res) => {

    let findHistory = () => {
        return new Promise((resolve, reject) => {
            HistoryModel.find().sort({ $natural: -1 })
                .select()
                .lean()
                .exec((err, HistoryDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'History Controller: v', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Expense Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(HistoryDetails)) {
                        logger.info('No Histoy Found', 'History  Controller:findHistory')
                        let apiResponse = response.generate(true, 'No History Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'History Found', 200, HistoryDetails)
                        resolve(apiResponse)
                    }
                })
        })
    }// end findHistory

    findHistory(req, res)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'History Deleted', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end deleteHistoryFunction 

module.exports = {
    addHistoryFunction: addHistoryFunction,
    deleteHistoryFunction: deleteHistoryFunction,
    getHistoryFunction: getHistoryFunction
}// end exports