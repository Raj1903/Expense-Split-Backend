define({ "api": [
  {
    "group": "expenses",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/expenses/:expenseId/details",
    "title": "api for getting expense details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseId",
            "description": "<p>expenseId of the expense. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"Expenses Found and Grouped\",\n     \"status\": 200,\n     \"data\": [\n         {\n             \"_id\": \"5bb8839db223e91708c6f19d\",\n             \"expenseMemberName\": \"raj sinha\",\n             \"expenseMemberId\": \"qZfzhjmEk\",\n             \"expenseCreatedOn\": \"2020-09-09T20:33:01.000Z\",\n             \"expenseCreatorName\": \"Json redis\",\n             \"expenseCreatorId\": \"I1gQyegoK\",\n             \"expenseTitle\": \"Mysore Trip expense\",\n             \"expenseId\": \"8qCoR3zSB\",\n             \"groupId\": \"ImaXUOrVm\",\n             \"__v\": 0\n         }\n     ]\n }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/expense.js",
    "groupTitle": "expenses",
    "name": "GetApiV1ExpensesExpenseidDetails"
  },
  {
    "group": "expenses",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/expenses/view/all/expenses/:userId",
    "title": "api for Getting all expenses of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Expenses Found and Grouped\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb8839db223e91708c6f19d\",\n            \"expenseMemberName\": \"raj sinha\",\n            \"expenseMemberId\": \"qZfzhjmEk\",\n            \"expenseCreatedOn\": \"2020-09-09T20:33:01.000Z\",\n            \"expenseCreatorName\": \"Json redis\",\n            \"expenseCreatorId\": \"I1gQyegoK\",\n            \"expenseTitle\": \"Mysore Trip expense\",\n            \"expenseId\": \"8qCoR3zSB\",\n            \"groupId\": \"ImaXUOrVm\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/expense.js",
    "groupTitle": "expenses",
    "name": "GetApiV1ExpensesViewAllExpensesUserid"
  },
  {
    "group": "expenses",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/expenses/addexpense",
    "title": "api to Add expense.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>Id of the Group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseTitle",
            "description": "<p>Name of the expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseCreatorId",
            "description": "<p>User Id of the user creating expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseCreatorName",
            "description": "<p>User Name of the user creating expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "amount",
            "description": "<p>of the expense of expense split. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Expense Created\",\n    \"status\": 200,\n    \"data\": {\n        \"groupId\": \"ImaXUOrVm\",\n        \"expenseId\": \"8qCoR3zSB\",\n        \"expenseTitle\": \"Mysore Ttrip Expense\",\n        \"expenseCreatorId\": \"I1gQyegoK\",\n        \"expenseCreatorName\": \"Json redis\",\n        \"expenseCreatedOn\": \"2020-09-09T20:33:01.000Z\",\n        \"epenseAmount\": \"\",\n        \"expenseDone\": \"no\",\n        \"_id\": \"5f593bfdcc766e0e38e64d21\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/expense.js",
    "groupTitle": "expenses",
    "name": "PostApiV1ExpensesAddexpense"
  },
  {
    "group": "expenses",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/expenses/:expenseId/delete",
    "title": "api to Delete expense.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseId",
            "description": "<p>Id of the expense to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the Expense successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/expense.js",
    "groupTitle": "expenses",
    "name": "PostApiV1ExpensesExpenseidDelete"
  },
  {
    "group": "expenses",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/expenses/:expenseId/updateexpense",
    "title": "api to Update expense Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseTitle",
            "description": "<p>Name of the expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseMemberId",
            "description": "<p>User Id of the user modifying expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseMemberName",
            "description": "<p>User Name of the user modifying expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseDone",
            "description": "<p>yes/no to make expense done/undone. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Expense details Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/expense.js",
    "groupTitle": "expenses",
    "name": "PutApiV1ExpensesExpenseidUpdateexpense"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/groups/:groupId/details",
    "title": "api for getting Group details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>groupId of the Group. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n        \"error\": false,\n        \"message\": \"Group Found\",\n        \"status\": 200,\n        \"data\": {\n            \"_id\": \"5f59373413fc682250299f29\",\n            \"groupModifiedOn\": \"2020-09-09T20:12:40.000Z\",\n            \"groupCreatedOn\": \"2020-09-09T20:12:36.000Z\",\n            \"groupMode\": \"private\",\n            \"groupMemberName\": \"Json redis\",\n            \"groupMemberId\": \"I1gQyegoK\",\n            \"groupCreatorName\": \"palak sinha\",\n            \"groupCreatorId\": \"BTeV0Chkk\",\n            \"groupName\": \"Pubg investment 1\",\n            \"groupId\": \"1SJFww0Nz\",\n            \"__v\": 0\n        }\n    }\n    {\n\"error\": false,\n\"message\": \"Groups Found and Grouped\",\n\"status\": 200,\n\"data\": [\n    {\n        \"_id\": \"5f59359e13fc682250299f28\",\n        \"groupId\": \"knctnVdPW\",\n        \"groupName\": \"My Group\",\n        \"groupCreatorId\": \"I1gQyegoK\",\n        \"groupCreatorName\": \"Json redis\",\n        \"groupCreatedOn\": \"2020-09-09T20:05:50.000Z\",\n        \"groupMember\": [],\n        \"groupMemberName\": \"Raj sinha\",\n        \"groupMemberId\": \"qZfzhjmEk\",\n        \"__v\": 0\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "groups",
    "name": "GetApiV1GroupsGroupidDetails"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/groups/view/all/groups/:userId",
    "title": "api for Getting all Groups of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Groups Found and Grouped\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5f59359e13fc682250299f28\",\n            \"groupId\": \"knctnVdPW\",\n            \"groupName\": \"My Group\",\n            \"groupCreatorId\": \"I1gQyegoK\",\n            \"groupCreatorName\": \"Json redis\",\n            \"groupCreatedOn\": \"2020-09-09T20:05:50.000Z\",\n            \"groupMember\": [],\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5f59373413fc682250299f29\",\n            \"groupId\": \"1SJFww0Nz\",\n            \"groupName\": \"pubg investment\",\n            \"groupCreatorId\": \"I1gQyegoK\",\n            \"groupCreatorName\": \"Json redis\",\n            \"groupCreatedOn\": \"2020-09-09T20:12:36.000Z\",\n            \"groupMember\": [],\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5f59374e13fc682250299f2a\",\n            \"groupId\": \"E0m7KHd6s\",\n            \"groupName\": \"Goa Trip\",\n            \"groupCreatorId\": \"I1gQyegoK\",\n            \"groupCreatorName\": \"Json redis\",\n            \"groupCreatedOn\": \"2020-09-09T20:13:02.000Z\",\n            \"groupMember\": [],\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "groups",
    "name": "GetApiV1GroupsViewAllGroupsUserid"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/groups/view/all/groups/:userId",
    "title": "api for Getting all Groups of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userIds",
            "description": "<p>userId of the users. (Body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n\"error\": false,\n\"message\": \"Groups Found and Grouped\",\n\"status\": 200,\n\"data\": [\n    {\n        \"_id\": \"5f59359e13fc682250299f28\",\n        \"groupId\": \"knctnVdPW\",\n        \"groupName\": \"My Group\",\n        \"groupCreatorId\": \"I1gQyegoK\",\n        \"groupCreatorName\": \"Json redis\",\n        \"groupCreatedOn\": \"2020-09-09T20:05:50.000Z\",\n        \"groupMember\": [],\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5f59373413fc682250299f29\",\n        \"groupId\": \"1SJFww0Nz\",\n        \"groupName\": \"pubg investment\",\n        \"groupCreatorId\": \"I1gQyegoK\",\n        \"groupCreatorName\": \"Json redis\",\n        \"groupCreatedOn\": \"2020-09-09T20:12:36.000Z\",\n        \"groupMember\": [],\n        \"__v\": 0\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "groups",
    "name": "GetApiV1GroupsViewAllGroupsUserid"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/groups/addGroup",
    "title": "api to Add Group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupName",
            "description": "<p>Name of the Group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupCreatorId",
            "description": "<p>User Id of the user creating group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupCreatorName",
            "description": "<p>User Name of the user creating group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupMemberId",
            "description": "<p>User Id of the user modifying group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupMemberName",
            "description": "<p>User Name of the user modifying group. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n    \"error\": false,\n    \"message\": \"Group Created\",\n    \"status\": 200,\n    \"data\": {\n        \"groupId\": \"knctnVdPW\",\n        \"groupName\": \"My Group\",\n        \"groupCreatorId\": \"I1gQyegoK\",\n        \"groupCreatorName\": \"Json redis\",\n        \"groupCreatedOn\": \"2020-09-09T20:05:50.000Z\",\n        \"groupMember\": []\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "groups",
    "name": "PostApiV1GroupsAddgroup"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/groups/:GroupId/delete",
    "title": "api to Delete Group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "GroupId",
            "description": "<p>GroupId of the Group to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the Group successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "groups",
    "name": "PostApiV1GroupsGroupidDelete"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/groups/:groupId/updateGroup",
    "title": "api to Update Group Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>Id of the Group. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupName",
            "description": "<p>Name of the Group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupMemberId",
            "description": "<p>User Id of the user modifying group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupMemberName",
            "description": "<p>User Name of the user modifying group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupMode",
            "description": "<p>Mode of the group. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Group details Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/group.js",
    "groupTitle": "groups",
    "name": "PutApiV1GroupsGroupidUpdategroup"
  },
  {
    "group": "history",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/history/addHistory",
    "title": "api to Add history.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseId",
            "description": "<p>Id of the expense. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>Action of the history. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"History Added\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bc88c95ecfe471824759870\",\n            \"createdOn\": \"2020-09-09T20:33:01.000Z\",                    \n            \"key\": \"Expense Add\",                    \n            \"expenseId\": \"8qCoR3zSB\",\n            \"groupId\": \"ImaXUOrVm\",\n            \"historyId\": \"B1wgD2wiX\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/history.js",
    "groupTitle": "history",
    "name": "PostApiV1HistoryAddhistory"
  },
  {
    "group": "history",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/history/deleteHistory",
    "title": "api to Delete history(Latest Object will be deleted).",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expenseId",
            "description": "<p>Id of the expense. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"History Deleted\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bc88c95ecfe471824759870\",\n            \"createdOn\": \"2020-09-09T20:33:01.000Z\",                    \n            \"key\": \"Expense Add\",                    \n            \"expenseId\": \"8qCoR3zSB\",\n            \"groupId\": \"ImaXUOrVm\",\n            \"historyId\": \"B1wgD2wiX\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/history.js",
    "groupTitle": "history",
    "name": "PostApiV1HistoryDeletehistory"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "api for Getting all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2020-09-09T18:42:45.000Z\",\n            \"emailVerified\": \"Yes\",\n            \"validationToken\": \"Null\",\n            \"email\": \"jsonredis@gmail.com\",\n            \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIAhxAqAcquDFdboc\",\n            \"mobileNumber\": \"91 9090909090\",\n            \"countryName\": \"India\",\n            \"lastName\": \"redis\",\n            \"firstName\": \"json\",\n            \"userId\": \"I1gQyegoK\"\n        }\n    ]\n},\n{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2020-09-09T11:24:12.000Z\",\n            \"emailVerified\": \"Yes\",\n            \"validationToken\": \"Null\",\n            \"email\": \"osamabinlaaden@gmail.com\",\n            \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIAhxAqAcquDFdboc\",\n            \"mobileNumber\": \"91 9090909090\",\n            \"countryName\": \"India\",\n            \"lastName\": \"osama\",\n            \"firstName\": \"binlaaded\",\n            \"userId\": \"IvAScdhiD\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/changePassword",
    "title": "api for Changing Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>old Password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>new Password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersChangepassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IllrZlFPRGQ2ciIsImlhdCI6MTU5OTY3NzE1MDAyOCwiZXhwIjoxNTk5NzYzNTUwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6IkkxZ1F5ZWdvSyIsImZpcnN0TmFtZSI6Ikpzb24iLCJsYXN0TmFtZSI6InJlZGlzIiwiY291bnRyeU5hbWUiOiIiLCJtb2JpbGVOdW1iZXIiOiIiLCJlbWFpbCI6Impzb25yZWRpc0BnYW1pbC5jb20iLCJ2YWxpZGF0aW9uVG9rZW4iOiIifX0.W0XkOdJsbRtNCcKwionlRW73Gfl95pyLmRDCTOmqaO4\",\n        \"userDetails\": {\n            \"userId\": \"I1gQyegoK\",\n            \"firstName\": \"Json\",\n            \"lastName\": \"redis\",\n            \"countryName\": \"\",\n            \"mobileNumber\": \"\",\n            \"email\": \"jsonredis@gamil.com\",\n            \"validationToken\": \"\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "api for Password Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password reset instructions sent successfully\",\n    \"status\": 200,\n    \"data\": None\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for Registering User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>country Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"I1gQyegoK\",\n        \"firstName\": \"Json\",\n        \"lastName\": \"redis\",\n        \"countryName\": \"\",\n        \"mobileNumber\": \"\",\n        \"email\": \"jsonredis@gamil.com\",\n        \"validationToken\": \"\",\n        \"createdOn\": \"2020-09-09T18:42:45.000Z\",\n        \"_id\": \"5f592225f26ab432ac6c2a0e\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/delete",
    "title": "api to Delete User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": \"2020-09-09T18:42:45.000Z\",\n        \"validationToken\": \"Null\",\n        \"email\": \"rajsnha@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"91 9006382324\",\n        \"countryName\": \"India\",\n        \"lastName\": \"sinha\",\n        \"firstName\": \"Raj\",\n        \"userId\": \"qZfzhjmEk\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/:userId/logout",
    "title": "api to logout from application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/updatePassword",
    "title": "api for Updating Password after Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "validationToken",
            "description": "<p>validationToken of the user recieved on Email. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersUpdatepassword"
  }
] });
