'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abi = JSON.parse(_CampaignFactory2.default.interface);
var address = '0x7109Dbb3C0D4d0F994F497d51d9869405cD5661A';

var instanceOfFactory = new _web2.default.eth.Contract(abi, address);

exports.default = instanceOfFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJjYW1wYWlnbkZhY3RvcnkiLCJhYmkiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJhZGRyZXNzIiwiaW5zdGFuY2VPZkZhY3RvcnkiLCJldGgiLCJDb250cmFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTRCLEFBQTVCOzs7Ozs7QUFFQSxJQUFNLE1BQU0sS0FBSyxBQUFMLE1BQVcsMEJBQWdCLEFBQTNCLEFBQVo7QUFDQSxJQUFNLFVBQVUsQUFBaEI7O0FBRUEsSUFBTSxvQkFBb0IsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEFBQXRCLEtBQTBCLEFBQTFCLEFBQTFCLEFBRUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJDOi9CbG9jay1FdGhlci9raWNrc3RhcnQifQ==