const express = require('express');
const router = express.Router();
const groupController = require("../controllers/groupController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/groups`;

    // params: groupName,groupCreatorId,groupCreatorName,groupMemberId,groupMemberName    
    app.post(`${baseUrl}/addGroup`, auth.isAuthorized, groupController.addGroupFunction);
     /**
     * @apiGroup groups
     * @apiVersion  1.0.0
     * @api {post} /api/v1/groups/addGroup api to Add Group.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} groupName Name of the Group. (body params) (required)
     * @apiParam {string} groupCreatorId User Id of the user creating group. (body params) (required)
     * @apiParam {string} groupCreatorName User Name of the user creating group. (body params) (required)
     * @apiParam {string} groupMemberId User Id of the user modifying group. (body params) (required)
     * @apiParam {string} groupMemberName User Name of the user modifying group. (body params) (required)
     
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
       {
    "error": false,
    "message": "Group Created",
    "status": 200,
    "data": {
        "groupId": "knctnVdPW",
        "groupName": "My Group",
        "groupCreatorId": "I1gQyegoK",
        "groupCreatorName": "Json redis",
        "groupCreatedOn": "2020-09-09T20:05:50.000Z",
        "groupMember": []
    }
}   
    */



    app.put(`${baseUrl}/:groupId/updateGroup`, auth.isAuthorized, groupController.updateGroupFunction)
        /**
     * @apiGroup groups
     * @apiVersion  1.0.0
     * @api {put} /api/v1/groups/:groupId/updateGroup api to Update Group Details.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} groupId Id of the Group. (query params) (required)
     * @apiParam {string} groupName Name of the Group. (body params) (required)
     * @apiParam {string} groupMemberId User Id of the user modifying group. (body params) (required)
     * @apiParam {string} groupMemberName User Name of the user modifying group. (body params) (required)
     * @apiParam {string} groupMode Mode of the group. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Group details Updated",
            "status": 200,
            "data": null
        }    
    */


    app.post(`${baseUrl}/:groupId/delete`, auth.isAuthorized, groupController.deleteGroupFunction)
     /**
     * @apiGroup groups
     * @apiVersion  1.0.0
     * @api {post} /api/v1/groups/:GroupId/delete api to Delete Group.
     *
     * @apiParam {string} GroupId GroupId of the Group to be deleted. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the Group successfully",
            "status": 200,
            "data": null
        }
    */


    app.get(`${baseUrl}/view/all/groups/:userId`, auth.isAuthorized, groupController.getAllGroupsFunction)
    /**
     * @apiGroup groups
     * @apiVersion  1.0.0
     * @api {get} /api/v1/groups/view/all/groups/:userId api for Getting all Groups of User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "Groups Found and Grouped",
    "status": 200,
    "data": [
        {
            "_id": "5f59359e13fc682250299f28",
            "groupId": "knctnVdPW",
            "groupName": "My Group",
            "groupCreatorId": "I1gQyegoK",
            "groupCreatorName": "Json redis",
            "groupCreatedOn": "2020-09-09T20:05:50.000Z",
            "groupMember": [],
            "__v": 0
        },
        {
            "_id": "5f59373413fc682250299f29",
            "groupId": "1SJFww0Nz",
            "groupName": "pubg investment",
            "groupCreatorId": "I1gQyegoK",
            "groupCreatorName": "Json redis",
            "groupCreatedOn": "2020-09-09T20:12:36.000Z",
            "groupMember": [],
            "__v": 0
        },
        {
            "_id": "5f59374e13fc682250299f2a",
            "groupId": "E0m7KHd6s",
            "groupName": "Goa Trip",
            "groupCreatorId": "I1gQyegoK",
            "groupCreatorName": "Json redis",
            "groupCreatedOn": "2020-09-09T20:13:02.000Z",
            "groupMember": [],
            "__v": 0
        }
    ]
}
    */
  

    app.post(`${baseUrl}/view/all/shared/groups`, auth.isAuthorized, groupController.getAllPublicGroupsFunction)
     /**
    * @apiGroup groups
    * @apiVersion  1.0.0
    * @api {get} /api/v1/groups/view/all/groups/:userId api for Getting all Groups of User.
    *
    * @apiParam {string} userIds userId of the users. (Body params) (required)
    * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
    * 
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "Groups Found and Grouped",
    "status": 200,
    "data": [
        {
            "_id": "5f59359e13fc682250299f28",
            "groupId": "knctnVdPW",
            "groupName": "My Group",
            "groupCreatorId": "I1gQyegoK",
            "groupCreatorName": "Json redis",
            "groupCreatedOn": "2020-09-09T20:05:50.000Z",
            "groupMember": [],
            "__v": 0
        },
        {
            "_id": "5f59373413fc682250299f29",
            "groupId": "1SJFww0Nz",
            "groupName": "pubg investment",
            "groupCreatorId": "I1gQyegoK",
            "groupCreatorName": "Json redis",
            "groupCreatedOn": "2020-09-09T20:12:36.000Z",
            "groupMember": [],
            "__v": 0
        }
   */
  
    // params: GroupId.
    app.get(`${baseUrl}/:groupId/details`, auth.isAuthorized, groupController.getGroupDetailsFunction)
     /**
     * @apiGroup groups 
     * @apiVersion  1.0.0
     * @api {get} /api/v1/groups/:groupId/details api for getting Group details.
     *
     * @apiParam {string} groupId groupId of the Group. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Group Found",
            "status": 200,
            "data": {
                "_id": "5f59373413fc682250299f29",
                "groupModifiedOn": "2020-09-09T20:12:40.000Z",
                "groupCreatedOn": "2020-09-09T20:12:36.000Z",
                "groupMode": "private",
                "groupMemberName": "Json redis",
                "groupMemberId": "I1gQyegoK",
                "groupCreatorName": "palak sinha",
                "groupCreatorId": "BTeV0Chkk",
                "groupName": "Pubg investment 1",
                "groupId": "1SJFww0Nz",
                "__v": 0
            }
        }
        {
    "error": false,
    "message": "Groups Found and Grouped",
    "status": 200,
    "data": [
        {
            "_id": "5f59359e13fc682250299f28",
            "groupId": "knctnVdPW",
            "groupName": "My Group",
            "groupCreatorId": "I1gQyegoK",
            "groupCreatorName": "Json redis",
            "groupCreatedOn": "2020-09-09T20:05:50.000Z",
            "groupMember": [],
            "groupMemberName": "Raj sinha",
            "groupMemberId": "qZfzhjmEk",
            "__v": 0
        }
    */
   
}


/** Run this command : apidoc -i app/routes/ -o apidoc/ */
