const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const response = require('../libs/responseLib');
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib');

/* Models */
const ExpenseModel = mongoose.model('Expense');
const GroupModel = mongoose.model('Group');


/* Start getAllExpensesFunction */
/* params: groupId
 */

let getAllExpensesFunction = (req, res) => {

    let findGroupDetails = () => {
        return new Promise((resolve, reject) => {
            GroupModel.findOne({
                    groupId: req.params.groupId
                })
                
                .select()
                .lean()
                .exec((err, groupDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Expense Controller: findGroupDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find group Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(groupDetails)) {
                        logger.info('No group Found', 'Expense  Controller:findGroupDetails')
                        let apiResponse = response.generate(true, 'No group Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'group Details Found', 200, groupDetails)
                        resolve(groupDetails)
                    }
                })
        })
    } // end findgroupDetails

    let findExpenses = (groupDetails) => {
        return new Promise((resolve, reject) => {

            ExpenseModel.find({
                    groupId: req.params.groupId
                })
                .select()
                .lean()
                .exec((err, ExpenseDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Expense Controller: findExpenses', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Expenses', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ExpenseDetails)) {
                        logger.info('No Expense Found', 'Expense  Controller:findExpenses')
                        let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Expenses Found and Grouped', 200, ExpenseDetails)
                        resolve(apiResponse)
                    }
                })
        })
    } // end findExpenses


    findGroupDetails(req, res)
        .then(findExpenses)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Expenses Found and Expenseed', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} // end getAllExpensesFunction 


/*  Start getExpenseDetailsFunction */
/* params : ExpenseId
 */
let getExpenseDetailsFunction = (req, res) => {
    ExpenseModel.findOne({
            expenseId: req.params.expenseId
        })
        .select()
        .lean()
        .exec((err, ExpenseDetails) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Expense Controller: getExpenseDetails', 10)
                let apiResponse = response.generate(true, 'Failed To Find Expenses', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(ExpenseDetails)) {
                logger.info('No Expense Found', 'Expense  Controller:getExpenseDetailsFunction')
                let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Expense Found', 200, ExpenseDetails)
                res.send(apiResponse)
            }
        })
} // end getExpenseDetailsFunction


/* Start Delete Expense  */
/* params : ExpenseId
 */
let deleteExpenseFunction = (req, res) => {

    let findExpenseDetails = () => {
        return new Promise((resolve, reject) => {
            ExpenseModel.findOne({
                    expenseId: req.params.expenseId
                })
                .select()
                .lean()
                .exec((err, ExpenseDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Expense Controller: findExpenseDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Expense Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ExpenseDetails)) {
                        logger.info('No Expense Found', 'Expense  Controller:findExpenseDetails')
                        let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Expense Details Found', 200, ExpenseDetails)
                        resolve(ExpenseDetails)
                    }
                })
        })
    } // end validate group input

    let deleteExpense = (ExpenseDetails) => {
        return new Promise((resolve, reject) => {

            ExpenseModel.findOneAndRemove({
                expenseId: req.params.expenseId
            }).exec((err, result) => {
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

                    let apiResponse = response.generate(false, 'Deleted the Expense successfully', 200, null)
                    resolve(apiResponse)
                }
            }); // end Expense model find and remove

        })
    } // end deleteExpense function


    findExpenseDetails(req, res)
        .then(deleteExpense)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Deleted the Expense successfully', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} // end deleteExpenseFunction 


/* Start Update Expense details */
/* params: ExpenseId
   body : ExpenseName,ExpenseMode,ExpenseMemberId,ExpenseMemberName
*/

let updateExpenseFunction = (req, res) => {

    let findExpenseDetails = () => {
        return new Promise((resolve, reject) => {
            ExpenseModel.findOne({
                    expenseId: req.params.expenseId
                })
                .select()
                .lean()
                .exec((err, ExpenseDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Expense Controller: findExpenseDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Expense Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ExpenseDetails)) {
                        logger.info('No Expense Found', 'Expense  Controller:findExpenseDetails')
                        let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Expense Details Found', 200, ExpenseDetails)
                        resolve(ExpenseDetails)
                    }
                })
        })
    } // end findExpensedetails 

    let updateExpense = (ExpenseDetails) => {
        return new Promise((resolve, reject) => {

            let options = req.body;
            options.expenseModifiedOn = time.now()

            ExpenseModel.update({
                expenseId: req.params.expenseId
            }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Expense Controller:updateExpense', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Expense details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Expense Found', 'Expense Controller:updateExpense')
                    let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'Expense details Updated', 200, null)
                    resolve(apiResponse)
                }
            }); // end Expense model update

        })
    } // end updateExpense function


    findExpenseDetails(req, res)
        .then(updateExpense)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Expense Updated', 200, "None")
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        }) 

} // end updateExpenseFunction 


// start addExpenseFunction 
/* params: groupId,ExpenseName,ExpenseCreatorId,ExpenseCreatorName,ExpenseMemberId,ExpenseMemberName
           
*/


let addExpenseFunction = (req, res) => {

    let validategroupInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.groupId && req.body.expenseTitle && req.body.expenseCreatorId && req.body.expenseCreatorName /*&&
                req.body.expenseMemberId && req.body.expenseMemberName*/ && req.body.expenseAmount) {
                resolve(req)
            } else {
                logger.error('Field Missing During Expense Creation', 'ExpenseController: addExpense()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    } // end validate group input

    let findGroupDetails = () => {
        return new Promise((resolve, reject) => {
            GroupModel.findOne({
                    groupId: req.body.groupId
                })
                .select()
                .lean()
                .exec((err, groupDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Expense Controller: findGroupDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Group Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(groupDetails)) {
                        logger.info('No Group Found', 'Expense  Controller:findGroupDetails')
                        let apiResponse = response.generate(true, 'No Group Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Group Details Found', 200, groupDetails)
                        resolve(groupDetails)
                    }
                })
        })
    } // end findGroupDetails

    let addExpense = () => {
        return new Promise((resolve, reject) => {
            //console.log(req.body)
            let newExpense = new ExpenseModel({

                groupId: req.body.groupId,
                expenseTitle: req.body.expenseTitle,
                expenseCreatorId: req.body.expenseCreatorId,
                expenseCreatorName: req.body.expenseCreatorName,
                //expenseMemberId: req.body.expenseMemberId,
                //expenseMemberName: req.body.expenseMemberName,
                expenseAmount: req.body.expenseAmount,
                expenseCreatedOn: time.now(),
                expenseModifiedOn: time.now(),
            })
            // newExpense doesnot have expenseId so we need to check with user input
            if (req.body.expenseId != undefined) {
                newExpense.expenseId = req.body.expenseId
            } else {
                newExpense.expenseId = shortid.generate()
            }

            console.log(newExpense)
            newExpense.save((err, newExpense) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'ExpenseController: addExpense', 10)
                    let apiResponse = response.generate(true, 'Failed to add new Expense', 500, null)
                    reject(apiResponse)
                } else {
                    let newExpenseObj = newExpense.toObject();
                    resolve(newExpenseObj)
                }
            })

        })
    } // end addExpense function


    validategroupInput(req, res)
        .then(findGroupDetails)
        .then(addExpense)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Expense Created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} // end addExpenseFunction 


/* Start getSubExpenseDetailsFunction */
/* params: expenseId */
/* body params: subExpenseId */






module.exports = {
    addExpenseFunction: addExpenseFunction,
    updateExpenseFunction: updateExpenseFunction,
    deleteExpenseFunction: deleteExpenseFunction,
    getAllExpensesFunction: getAllExpensesFunction,
    getExpenseDetailsFunction: getExpenseDetailsFunction,

} // end exports