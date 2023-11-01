'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _index = require('next\\dist\\lib\\router\\index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Lamaran\\Female Daily\\daily_female\\components\\Login.js';


function Login() {
  var _this = this;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];
  //   const router = useRouter();

  var handleLogin = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var response, userData;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.get('https://femaledaily-users.loca.lt/users?email=' + email);

            case 3:
              response = _context.sent;

              if (response.data.length > 0) {
                userData = response.data[0];

                console.log(userData.token);

                if (userData) {
                  localStorage.setItem('token', userData.token);
                  router.push('/products');
                } else {
                  setError('Token tidak ditemukan');
                }
              } else {
                setError('Email tidak ditemukan');
              }
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              setError('Terjadi kesalahan saat login');

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }));

    return function handleLogin() {
      return _ref.apply(this, arguments);
    };
  }();

  return _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('div', { className: 'box-login-form', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'Login'), _react2.default.createElement('input', {
    type: 'email',
    placeholder: 'Alamat Email',
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement('button', { onClick: handleLogin, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, 'Login'), error && _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, error)));
}

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVMb2dpbiIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsImxlbmd0aCIsInVzZXJEYXRhIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJvdXRlciIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7Ozs7OztBQUVULFNBQUEsQUFBUyxRQUFRO2NBQUE7O2tCQUNXLHFCQURYLEFBQ1csQUFBUzsyREFEcEI7TUFBQSxBQUNSLG1CQURRO01BQUEsQUFDRCxzQkFEQzs7bUJBRVcscUJBRlgsQUFFVyxBQUFTOzREQUZwQjtNQUFBLEFBRVIsbUJBRlE7TUFBQSxBQUVELHNCQUNoQjtBQUVFOztNQUFNLDBCQUFBO3dGQUFjLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBOzhCQUFBO3FCQUVPLGdCQUFBLEFBQU0sdURBRmIsQUFFTyxBQUM0Qjs7aUJBRDdDO0FBRlUsa0NBTWhCOztrQkFBSSxTQUFBLEFBQVMsS0FBVCxBQUFjLFNBQWxCLEFBQTJCLEdBQUcsQUFDdEI7QUFEc0IsMkJBQ1gsU0FBQSxBQUFTLEtBREUsQUFDWCxBQUFjLEFBQy9COzt3QkFBQSxBQUFRLElBQUksU0FBWixBQUFxQixBQUVyQjs7b0JBQUEsQUFBSSxVQUFVLEFBQ1o7K0JBQUEsQUFBYSxRQUFiLEFBQXFCLFNBQVMsU0FBOUIsQUFBdUMsQUFDdkM7eUJBQUEsQUFBTyxLQUFQLEFBQVksQUFDYjtBQUhELHVCQUdPLEFBQ0w7MkJBQUEsQUFBUyxBQUNWO0FBQ0Y7QUFWRCxxQkFVTyxBQUNMO3lCQUFBLEFBQVMsQUFDVjtBQWxCZTs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTs4Q0FvQmhCOzt1QkFwQmdCLEFBb0JoQixBQUFTOztpQkFwQk87aUJBQUE7OEJBQUE7O0FBQUE7OEJBQUE7QUFBZDs7a0NBQUE7OEJBQUE7QUFBQTtBQUFOLEFBd0JBOzt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0k7QUFESjtHQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDQTtBQURBO3FCQUNBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURBLEFBQ0EsQUFDQTtVQUFBLEFBQ1MsQUFDTDtpQkFGSixBQUVnQixBQUNaO1dBSEosQUFHVyxBQUNQO2NBQVUsa0JBQUEsQUFBQyxHQUFEO2FBQU8sU0FBUyxFQUFBLEFBQUUsT0FBbEIsQUFBTyxBQUFrQjtBQUp2Qzs7Z0JBQUE7a0JBRkEsQUFFQSxBQU1BO0FBTkE7QUFDSSxzQkFLSixjQUFBLFlBQVEsU0FBUixBQUFpQjtnQkFBakI7a0JBQUE7QUFBQTtLQVJBLEFBUUEsQUFDQyxtQ0FBUyxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxHQUFBLEVBWGhCLEFBQ0UsQUFDSSxBQVNVLEFBSWpCO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiRDovTGFtYXJhbi9GZW1hbGUgRGFpbHkvZGFpbHlfZmVtYWxlIn0=