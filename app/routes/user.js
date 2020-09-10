const express = require('express');
//const router = express.Router();
const appConfig = require('./../../config/appConfig');
const userController = require('./../controllers/userController');
const auth = require = require('./../middlewares/auth');


module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/users`;

    // params: firstName, lastName, email, password , mobileNumber
    app.post(`${baseUrl}/signup`, userController.signUpFunction)
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for Registering User.
     *
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {string} countryName country Name of the user. (body params) (required)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "User created",
    "status": 200,
    "data": {
        "userId": "I1gQyegoK",
        "firstName": "Json",
        "lastName": "redis",
        "countryName": "",
        "mobileNumber": "",
        "email": "jsonredis@gamil.com",
        "validationToken": "",
        "createdOn": "2020-09-09T18:42:45.000Z",
        "_id": "5f592225f26ab432ac6c2a0e",
        "__v": 0
    }
}
    */

    // params: email, password
    app.post(`${baseUrl}/login`, userController.loginFunction)
        /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for Login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "Login Successful",
    "status": 200,
    "data": {
        "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IllrZlFPRGQ2ciIsImlhdCI6MTU5OTY3NzE1MDAyOCwiZXhwIjoxNTk5NzYzNTUwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6IkkxZ1F5ZWdvSyIsImZpcnN0TmFtZSI6Ikpzb24iLCJsYXN0TmFtZSI6InJlZGlzIiwiY291bnRyeU5hbWUiOiIiLCJtb2JpbGVOdW1iZXIiOiIiLCJlbWFpbCI6Impzb25yZWRpc0BnYW1pbC5jb20iLCJ2YWxpZGF0aW9uVG9rZW4iOiIifX0.W0XkOdJsbRtNCcKwionlRW73Gfl95pyLmRDCTOmqaO4",
        "userDetails": {
            "userId": "I1gQyegoK",
            "firstName": "Json",
            "lastName": "redis",
            "countryName": "",
            "mobileNumber": "",
            "email": "jsonredis@gamil.com",
            "validationToken": ""
        }
    }
}
    */

    // params: authToken, userId
    app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout)
      /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/logout api to logout from application.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null
        }
    */


    // body params: email.
    // generate reset password link only
    app.post(`${baseUrl}/reset-link`, userController.resetEmailFunction)
       /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/resetPassword api for Password Reset.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password reset instructions sent successfully",
            "status": 200,
            "data": None
        }    
    */
    
    // params: validationToken,password.
    app.post(`${baseUrl}/update-password`, userController.updatePasswordFunction)
        /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/updatePassword api for Updating Password after Reset.
     *
     * @apiParam {string} validationToken validationToken of the user recieved on Email. (body params) (required)
     * @apiParam {string} password new password of the user . (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
            
        }
    */

    // body params: userId, oldPassword,newPassword.
    app.post(`${baseUrl}/changePassword`, auth.isAuthorized,userController.changePasswordFunction)
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/changePassword api for Changing Password.
     *
     * @apiParam {string} userId userId of the user. (body params) (required)
     * @apiParam {string} oldPassword old Password of the user. (body params) (required)
     * @apiParam {string} newPassword new Password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
        }
    */

    // params: userId.
    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser)
    


    // params: userId.
   // app.get(`${baseUrl}/verify-email/:userId`, userController.verifyEmailFunction)

    // params: userId.
    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser)
       /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/delete api to Delete User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)

     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the user successfully",
            "status": 200,
            "data": {
                "createdOn": "2020-09-09T18:42:45.000Z",
                "validationToken": "Null",
                "email": "rajsnha@gmail.com",
                "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa",
                "mobileNumber": "91 9006382324",
                "countryName": "India",
                "lastName": "sinha",
                "firstName": "Raj",
                "userId": "qZfzhjmEk"
            }
        }
    */


    // no params required
    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser)
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/view/all api for Getting all users.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All User Details Found",
            "status": 200,
            "data": [
                {
                    "createdOn": "2020-09-09T18:42:45.000Z",
                    "emailVerified": "Yes",
                    "validationToken": "Null",
                    "email": "jsonredis@gmail.com",
                    "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIAhxAqAcquDFdboc",
                    "mobileNumber": "91 9090909090",
                    "countryName": "India",
                    "lastName": "redis",
                    "firstName": "json",
                    "userId": "I1gQyegoK"
                }
            ]
        },
        {
            "error": false,
            "message": "All User Details Found",
            "status": 200,
            "data": [
                {
                    "createdOn": "2020-09-09T11:24:12.000Z",
                    "emailVerified": "Yes",
                    "validationToken": "Null",
                    "email": "osamabinlaaden@gmail.com",
                    "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIAhxAqAcquDFdboc",
                    "mobileNumber": "91 9090909090",
                    "countryName": "India",
                    "lastName": "osama",
                    "firstName": "binlaaded",
                    "userId": "IvAScdhiD"
                }
            ]
        }

    */


    // params: userId.
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized,userController.getSingleUser);
}


/** Run this command : apidoc -i app/routes/ -o apidoc/ */