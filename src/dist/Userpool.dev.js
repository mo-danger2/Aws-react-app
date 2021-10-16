"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _amazonCognitoIdentityJs = require("amazon-cognito-identity-js");

var poolData = {
  UserPoolId: "",
  ClientId: ""
};

var _default = new _amazonCognitoIdentityJs.CognitoUserPool(poolData);

exports["default"] = _default;
//# sourceMappingURL=Userpool.dev.js.map
