'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var web3 = void 0;
if (typeof window != 'undefined' && typeof window.web3 != 'undefined') {
  // We are on browser
  var getProvider = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return window.web3.currentProvider.enable();

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function getProvider() {
      return _ref.apply(this, arguments);
    };
  }();
  getProvider();
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on server
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/018e52aa2c604b84b6622d0bbaadc591');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZ2V0UHJvdmlkZXIiLCJjdXJyZW50UHJvdmlkZXIiLCJlbmFibGUiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7Ozs7O0FBR0EsSUFBSSxZQUFKO0FBQ0EsSUFBSSxPQUFPLEFBQVAsVUFBaUIsQUFBakIsZUFBZ0MsT0FBTyxPQUFPLEFBQWQsUUFBc0IsQUFBMUQsYUFBc0UsQUFDcEU7QUFDQTtNQUFNLDBCQUFBO3dGQUFjLG1CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBO3FCQUNkLE9BQU8sQUFBUCxLQUFZLEFBQVosZ0JBQTRCLEFBQTVCLEFBRGM7O2lCQUFBO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0FBQWQ7O2tDQUFBOzhCQUFBO0FBQUE7QUFBTixBQUdGO0FBQ0U7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNEO0FBUEQsT0FRSSxBQUNGO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDZixBQURlLEFBQWpCLEFBR0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L0Jsb2NrLUV0aGVyL2tpY2tzdGFydCJ9