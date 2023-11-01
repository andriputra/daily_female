webpackHotUpdate(5,{

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = __webpack_require__(100);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(412);

var _axios2 = _interopRequireDefault(_axios);

__webpack_require__(444);

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
      lineNumber: 34
    }
  }, _react2.default.createElement('div', { className: 'box-login-form', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
      lineNumber: 37
    }
  }), _react2.default.createElement('button', { onClick: handleLogin, __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, 'Login'), error && _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, error)));
}

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVMb2dpbiIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsImxlbmd0aCIsInVzZXJEYXRhIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJvdXRlciIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7OztBQUVQLFNBQUEsQUFBUyxRQUFRO2NBQUE7O2tCQUNXLHFCQURYLEFBQ1csQUFBUzsyREFEcEI7TUFBQSxBQUNSLG1CQURRO01BQUEsQUFDRCxzQkFEQzs7bUJBRVcscUJBRlgsQUFFVyxBQUFTOzREQUZwQjtNQUFBLEFBRVIsbUJBRlE7TUFBQSxBQUVELHNCQUVkOztNQUFNLDBCQUFBO3dGQUFjLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBOzhCQUFBO3FCQUVPLGdCQUFBLEFBQU0sdURBRmIsQUFFTyxBQUM0Qjs7aUJBRDdDO0FBRlUsa0NBTWhCOztrQkFBSSxTQUFBLEFBQVMsS0FBVCxBQUFjLFNBQWxCLEFBQTJCLEdBQUcsQUFDdEI7QUFEc0IsMkJBQ1gsU0FBQSxBQUFTLEtBREUsQUFDWCxBQUFjLEFBQy9COzt3QkFBQSxBQUFRLElBQUksU0FBWixBQUFxQixBQUVyQjs7b0JBQUEsQUFBSSxVQUFVLEFBQ1o7K0JBQUEsQUFBYSxRQUFiLEFBQXFCLFNBQVMsU0FBOUIsQUFBdUMsQUFDdkM7eUJBQUEsQUFBTyxLQUFQLEFBQVksQUFDYjtBQUhELHVCQUdPLEFBQ0w7MkJBQUEsQUFBUyxBQUNWO0FBQ0Y7QUFWRCxxQkFVTyxBQUNMO3lCQUFBLEFBQVMsQUFDVjtBQWxCZTs4QkFBQTtBQUFBOztpQkFBQTs4QkFBQTs4Q0FvQmhCOzt1QkFwQmdCLEFBb0JoQixBQUFTOztpQkFwQk87aUJBQUE7OEJBQUE7O0FBQUE7OEJBQUE7QUFBZDs7a0NBQUE7OEJBQUE7QUFBQTtBQUFOLEFBd0JBOzt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0k7QUFESjtHQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDQTtBQURBO3FCQUNBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURBLEFBQ0EsQUFDQTtVQUFBLEFBQ1MsQUFDTDtpQkFGSixBQUVnQixBQUNaO1dBSEosQUFHVyxBQUNQO2NBQVUsa0JBQUEsQUFBQyxHQUFEO2FBQU8sU0FBUyxFQUFBLEFBQUUsT0FBbEIsQUFBTyxBQUFrQjtBQUp2Qzs7Z0JBQUE7a0JBRkEsQUFFQSxBQU1BO0FBTkE7QUFDSSxzQkFLSixjQUFBLFlBQVEsU0FBUixBQUFpQjtnQkFBakI7a0JBQUE7QUFBQTtLQVJBLEFBUUEsQUFDQyxtQ0FBUyxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxHQUFBLEVBWGhCLEFBQ0UsQUFDSSxBQVNVLEFBSWpCO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiRDovTGFtYXJhbi9GZW1hbGUgRGFpbHkvZGFpbHlfZmVtYWxlIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Lamaran\\Female Daily\\daily_female\\components\\Login.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Lamaran\\Female Daily\\daily_female\\components\\Login.js"); } } })();

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

throw new Error("Module parse failed: D:\\Lamaran\\Female Daily\\daily_female\\layouts\\style\\style.css Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| .container{\r\n|     background-color: blue;\r\n| }");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45NDA0OWJkYTk5ZmRiNzE2ZDA3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi5qcz80NGM1YTE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICcuLi9sYXlvdXRzL3N0eWxlL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgaHR0cHM6Ly9mZW1hbGVkYWlseS11c2Vycy5sb2NhLmx0L3VzZXJzP2VtYWlsPSR7ZW1haWx9YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gcmVzcG9uc2UuZGF0YVswXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YS50b2tlbik7XHJcblxyXG4gICAgICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdXNlckRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9kdWN0cycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRFcnJvcignVG9rZW4gdGlkYWsgZGl0ZW11a2FuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yKCdFbWFpbCB0aWRhayBkaXRlbXVrYW4nKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoJ1RlcmphZGkga2VzYWxhaGFuIHNhYXQgbG9naW4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveC1sb2dpbi1mb3JtJz5cclxuICAgICAgICA8aDI+TG9naW48L2gyPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFsYW1hdCBFbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3J9PC9wPn0gICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2dpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQVZBO0FBWUE7QUFsQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBb0JBO0FBQ0E7QUFEQTtBQUNBO0FBckJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=