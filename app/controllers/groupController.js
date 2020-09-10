const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib')

//const emailLib = require('../libs/emailLib');

/* Models */
const GroupModel = mongoose.model('Group')
const UserModel = mongoose.model('User')


/* Start getAllGroupsFunction */
/* params: userId
*/

let getAllGroupsFunction = (req, res) => {

    let findUserDetails = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ userId: req.params.userId })
                .select()
                .lean()
                .exec((err, userDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Group Controller: findUserDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userDetails)) {
                        logger.info('No User Found', 'Group  Controller:findGroups')
                        let apiResponse = response.generate(true, 'No User Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'User Details Found', 200, userDetails)
                        resolve(userDetails)
                    }
                })
        })
    }// end finduserDetails

    let findGroups = () => {
        return new Promise((resolve, reject) => {

            GroupModel.find({ groupCreatorId: req.params.userId})
                .select()
                .lean()
                .exec((err, GroupDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Group Controller: findGroups', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Groups', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(GroupDetails)) {
                        logger.info('No Group Found', 'Group  Controller:findGroups')
                        let apiResponse = response.generate(true, 'No Group Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Groups Found and Grouped', 200, GroupDetails)
                        resolve(apiResponse)
                    }
                })
        })
    }// end findGroups


    findUserDetails(req, res)
        .then(findGroups)
        .then((resolve) => {
            
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end getAllGroupsFunction 


/* Start getAllPublicGroupsFunction */
/* params: userId
*/

let getAllPublicGroupsFunction = (req, res) => {
    let userIds = req.body.userId.split(',')
    console.log(userIds)

    let findUserDetails = () => {
        return new Promise((resolve, reject) => {

            UserModel.find({ userId: { $in: userIds } })
                .select()
                .lean()
                .exec((err, userDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Group Controller: findUserDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userDetails)) {
                        logger.info('No User Found', 'Group  Controller:findGroups')
                        let apiResponse = response.generate(true, 'No User Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'User Details Found', 200, userDetails)
                        resolve(userDetails)
                    }
                })
        })
    }// end finduserDetails

    let findGroups = (userDetails) => {
        return new Promise((resolve, reject) => {


            GroupModel.find({ groupCreatorId: { $in:  userIds } , /*groupMode: 'public' */})
                .select()
                .lean()
                .exec((err, GroupDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Group Controller: findGroups', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Groups', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(GroupDetails)) {
                        logger.info('No Group Found', 'Group  Controller:findGroups')
                        let apiResponse = response.generate(true, 'No Group Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Groups Found and Grouped', 200, GroupDetails)
                        resolve(apiResponse)
                    }
                })
        })
    }// end findGroups


    findUserDetails(req, res)
        .then(findGroups)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Groups Found and Grouped', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end getAllPublicGroupsFunction 


/*  Start getGroupDetailsFunction */
/* params : GroupId
*/
let getGroupDetailsFunction = (req, res) => {
    GroupModel.findOne({ groupId: req.params.groupId })
        .select()
        .lean()
        .exec((err, GroupDetails) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Group Controller: getGroupDetails', 10)
                let apiResponse = response.generate(true, 'Failed To Find Groups', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(GroupDetails)) {
                logger.info('No Group Found', 'Group  Controller:getGroupDetailsFunction')
                let apiResponse = response.generate(true, 'No Group Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Group Found', 200, GroupDetails)
                res.send(apiResponse)
            }
        })
}// end getGroupDetailsFunction


/* Start Delete Group  */
/* params : GroupId 
*/
let deleteGroupFunction = (req, res) => {

    let findGroupDetails = () => {
        return new Promise((resolve, reject) => {
            GroupModel.findOne({ groupId: req.params.groupId })
                .select()
                .lean()
                .exec((err, GroupDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Group Controller: findGroupDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Group Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(GroupDetails)) {
                        logger.info('No Group Found', 'Group  Controller:findGroupDetails')
                        let apiResponse = response.generate(true, 'No Group Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Group Details Found', 200, GroupDetails)
                        resolve(GroupDetails)
                    }
                })
        })
    }// end validate user input

    let deleteGroup = (GroupDetails) => {
        return new Promise((resolve, reject) => {

            GroupModel.findOneAndRemove({ groupId: req.params.groupId }).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Group Controller: deleteGroup', 10)
                    let apiResponse = response.generate(true, 'Failed To delete Group', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Group Found', 'Group Controller: deleteGroup')
                    let apiResponse = response.generate(true, 'No Group Found', 404, null)
                    reject(apiResponse)
                } else {
                    
                    let apiResponse = response.generate(false, 'Deleted the Group successfully', 200, null)
                    resolve(apiResponse)
                }
            });// end Group model find and remove

        })
    }// end deleteGroup function


    findGroupDetails(req, res)
        .then(deleteGroup)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Deleted the Group successfully', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end deleteGroupFunction 


/* Start Update Group details */
/* params: groupId
   body : groupName,groupMode,groupMemberId,groupMemberName
*/

let updateGroupFunction = (req, res) => {

    let findGroupDetails = () => {
        return new Promise((resolve, reject) => {
            GroupModel.findOne({ groupId: req.params.groupId })
                .select()
                .lean()
                .exec((err, GroupDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Group Controller: findGroupDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Group Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(GroupDetails)) {
                        logger.info('No Group Found', 'Group  Controller:findGroupDetails')
                        let apiResponse = response.generate(true, 'No Group Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Group Details Found', 200, GroupDetails)
                        resolve(GroupDetails)
                    }
                })
        })
    }// end findGroupdetails

    let updateGroup = (GroupDetails) => {
        return new Promise((resolve, reject) => {

            let options = req.body;
            options.groupModifiedOn = time.now()
            
            GroupModel.update({ groupId: req.params.groupId }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Group Controller:updateGroup', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Group details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Group Found', 'Group Controller:updateGroup')
                    let apiResponse = response.generate(true, 'No Group Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'Group details Updated', 200, null)
                    resolve(apiResponse)
                }
            });// end Group model update

        })
    }// end updateGroup function


    findGroupDetails(req, res)
        .then(updateGroup)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Group Updated', 200, "None")
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end updateGroupFunction 



// start addGroupFunction 
/* params: groupName,groupCreatorId,groupCreatorName,groupMemberId,groupMemberName
           
*/

let addGroupFunction = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.groupName && req.body.groupCreatorId && req.body.groupCreatorName &&
                req.body.groupMemberId && req.body.groupMemberName) {
                resolve(req)
            } else {
                logger.error('Field Missing During Group Creation', 'GroupController: addGroup()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }// end validate user input 

    let addGroup = () => {
        return new Promise((resolve, reject) => {
            //console.log(req.body)
            let newGroup = new GroupModel({
                groupId: shortid.generate(),
                groupName: req.body.groupName,
                groupCreatorId: req.body.groupCreatorId,
                groupCreatorName: req.body.groupCreatorName,
                groupMemberId: req.body.groupMemberId,
                groupMemberName: req.body.groupMemberName,
                groupCreatedOn: time.now(),
            })

            console.log(newGroup)
            newGroup.save((err, newGroup) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'GroupController: addGroup', 10)
                    let apiResponse = response.generate(true, 'Failed to add new Group', 500, null)
                    reject(apiResponse)
                } else {
                    let newGroupObj = newGroup.toObject();
                    delete newGroupObj._id
                    delete newGroupObj.__v
                    resolve(newGroupObj)
                }
            })

        })
    }// end addGroup function


    validateUserInput(req, res)
        .then(addGroup)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Group Created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end addGroupFunction 



module.exports = {
    addGroupFunction: addGroupFunction,
    updateGroupFunction: updateGroupFunction,
    deleteGroupFunction: deleteGroupFunction,
    getAllGroupsFunction: getAllGroupsFunction,
    getGroupDetailsFunction: getGroupDetailsFunction,
    getAllPublicGroupsFunction:getAllPublicGroupsFunction
}// end exports