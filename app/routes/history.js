const express = require('express');
const router = express.Router();
const historyController = require("../controllers/historyController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/history`;

    // params: key(String), value(Object)
    
    app.post(`${baseUrl}/addHistory`, auth.isAuthorized, historyController.addHistoryFunction);
    /**
     * @apiGroup history
     * @apiVersion  1.0.0
     * @api {post} /api/v1/history/addHistory api to Add history.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} expenseId Id of the expense. (body params) (required)
     * @apiParam {string} key Action of the history. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "History Added",
            "status": 200,
            "data": [
                {
                    "_id": "5bc88c95ecfe471824759870",
                    "createdOn": "2020-09-09T20:33:01.000Z",                    
                    "key": "Expense Add",                    
                    "expenseId": "8qCoR3zSB",
                    "groupId": "ImaXUOrVm",
                    "historyId": "B1wgD2wiX",
                    "__v": 0
                }
            ]
        }
    */



    app.post(`${baseUrl}/deleteHistory`, auth.isAuthorized, historyController.deleteHistoryFunction);

    /**
     * @apiGroup history
     * @apiVersion  1.0.0
     * @api {post} /api/v1/history/deleteHistory api to Delete history(Latest Object will be deleted).
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} expenseId Id of the expense. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "History Deleted",
            "status": 200,
            "data": [
                {
                    "_id": "5bc88c95ecfe471824759870",
                    "createdOn": "2020-09-09T20:33:01.000Z",                    
                    "key": "Expense Add",                    
                    "expenseId": "8qCoR3zSB",
                    "groupId": "ImaXUOrVm",
                    "historyId": "B1wgD2wiX",
                    "__v": 0
                }
            ]
        }
    */

    app.post(`${baseUrl}/getHistory`, auth.isAuthorized, historyController.getHistoryFunction);



}


/** Run this command : apidoc -i app/routes/ -o apidoc/ */
