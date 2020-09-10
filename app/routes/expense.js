const express = require('express');
const router = express.Router();
const expenseController = require("../controllers/expenseController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/expenses`;

    // params: groupId,expenseTitle,expenseCreatorId,expenseCreatorName,expenseMemberId,expenseMemberName,


 
    app.post(`${baseUrl}/addexpense`, auth.isAuthorized, expenseController.addExpenseFunction);
    /**
     * @apiGroup expenses
     * @apiVersion  1.0.0
     * @api {post} /api/v1/expenses/addexpense api to Add expense.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} groupId Id of the Group. (body params) (required)
     * @apiParam {string} expenseTitle Name of the expense. (body params) (required)
     * @apiParam {string} expenseCreatorId User Id of the user creating expense. (body params) (required)
     * @apiParam {string} expenseCreatorName User Name of the user creating expense. (body params) (required)
     * @apiParam {string} amount of the expense of expense split. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "Expense Created",
    "status": 200,
    "data": {
        "groupId": "ImaXUOrVm",
        "expenseId": "8qCoR3zSB",
        "expenseTitle": "Mysore Ttrip Expense",
        "expenseCreatorId": "I1gQyegoK",
        "expenseCreatorName": "Json redis",
        "expenseCreatedOn": "2020-09-09T20:33:01.000Z",
        "epenseAmount": "",
        "expenseDone": "no",
        "_id": "5f593bfdcc766e0e38e64d21",
        "__v": 0
    }
}
    */


    app.put(`${baseUrl}/:expenseId/updateexpense`, auth.isAuthorized, expenseController.updateExpenseFunction);
    /**
     * @apiGroup expenses
     * @apiVersion  1.0.0
     * @api {put} /api/v1/expenses/:expenseId/updateexpense api to Update expense Details.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} expenseTitle Name of the expense. (body params) (required)
     * @apiParam {string} expenseMemberId User Id of the user modifying expense. (body params) (required)
     * @apiParam {string} expenseMemberName User Name of the user modifying expense. (body params) (required)
     * @apiParam {string} expenseDone yes/no to make expense done/undone. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Expense details Updated",
            "status": 200,
            "data": null
        }    
    */

    // params: expenseId.
    app.post(`${baseUrl}/:expenseId/delete`, auth.isAuthorized, expenseController.deleteExpenseFunction);

    /**
     * @apiGroup expenses
     * @apiVersion  1.0.0
     * @api {post} /api/v1/expenses/:expenseId/delete api to Delete expense.
     *
     * @apiParam {string} expenseId Id of the expense to be deleted. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the Expense successfully",
            "status": 200,
            "data": null
        }
    */


    app.get(`${baseUrl}/view/all/expenses/:groupId`, auth.isAuthorized, expenseController.getAllExpensesFunction);
    /**
     * @apiGroup expenses
     * @apiVersion  1.0.0
     * @api {get} /api/v1/expenses/view/all/expenses/:userId api for Getting all expenses of User.
     *
     * @apiParam {string} groupId userId of the user. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Expenses Found and Grouped",
            "status": 200,
            "data": [
                {
                    "_id": "5bb8839db223e91708c6f19d",
                    "expenseMemberName": "raj sinha",
                    "expenseMemberId": "qZfzhjmEk",
                    "expenseCreatedOn": "2020-09-09T20:33:01.000Z",
                    "expenseCreatorName": "Json redis",
                    "expenseCreatorId": "I1gQyegoK",
                    "expenseTitle": "Mysore Trip expense",
                    "expenseId": "8qCoR3zSB",
                    "groupId": "ImaXUOrVm",
                    "__v": 0
                }
            ]
        }
    */


    // params: expenseId.
    app.get(`${baseUrl}/:expenseId/details`, auth.isAuthorized, expenseController.getExpenseDetailsFunction);
    /**
     * @apiGroup expenses 
     * @apiVersion  1.0.0
     * @api {get} /api/v1/expenses/:expenseId/details api for getting expense details.
     *
     * @apiParam {string} expenseId expenseId of the expense. (header params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
       {
            "error": false,
            "message": "Expenses Found and Grouped",
            "status": 200,
            "data": [
                {
                    "_id": "5bb8839db223e91708c6f19d",
                    "expenseMemberName": "raj sinha",
                    "expenseMemberId": "qZfzhjmEk",
                    "expenseCreatedOn": "2020-09-09T20:33:01.000Z",
                    "expenseCreatorName": "Json redis",
                    "expenseCreatorId": "I1gQyegoK",
                    "expenseTitle": "Mysore Trip expense",
                    "expenseId": "8qCoR3zSB",
                    "groupId": "ImaXUOrVm",
                    "__v": 0
                }
            ]
        }
    */


    /* params: ExpenseId
        body : subExpenseName,subExpenseMemberId,subExpenseMemberName,subExpenseCreatorId,subExpenseCreatorName
    */

   


}




/** Run this command : apidoc -i app/routes/ -o apidoc/ */
