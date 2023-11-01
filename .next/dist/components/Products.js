'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Lamaran\\Female Daily\\daily_female\\components\\Products.js';


function Products() {
  //   const [userData, setUserData] = useState({});
  //   const [products, setProducts] = useState([]);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [itemsPerPage] = 10;

  //   useEffect(() => {
  //     // Ambil data pengguna dari localStorage
  //     const username = localStorage.getItem('username');
  //     setUserData({ username });

  //     // Ambil data produk dari API
  //     axios.get('https://femaledaily-products.loca.lt/products')
  //       .then((response) => {
  //         setProducts(response.data);
  //       })
  //       .catch((error) => {
  //         console.error('Terjadi kesalahan saat mengambil data produk: ', error);
  //       });
  //   }, []);

  //   // Hitung indeks produk yang akan ditampilkan di halaman
  //   const indexOfLastItem = currentPage * itemsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  //   // Fungsi untuk mengganti halaman
  //   const paginate = (pageNumber) => {
  //     setCurrentPage(pageNumber);
  //   };

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, 'Products'), _react2.default.createElement('table', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement('thead', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, 'Product Name'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, 'Status'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, 'Action'))), _react2.default.createElement('tbody', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  })), _react2.default.createElement('div', { className: 'pagination', __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }));
}

exports.default = Products;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlByb2R1Y3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVMsQUFBVTs7OztBQUMxQixBQUFPOzs7Ozs7Ozs7QUFFUCxTQUFBLEFBQVMsV0FBVyxBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFRTs7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQTs7Z0JBQ0U7a0JBREYsQUFDRSxBQUlBO0FBSkE7QUFBQSxzQkFJQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FMRixBQUtFLEFBQ0EsNkJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLGlDQUFBLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUZGLEFBRUUsQUFDQSwyQkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FMTixBQUNFLEFBQ0UsQUFHRSxBQUdKOztnQkFBQTtrQkFkSixBQU1FLEFBUUUsQUFjRjtBQWRFO0FBQUEsOENBY0csV0FBTCxBQUFlO2dCQUFmO2tCQTdCSixBQUNFLEFBNEJFLEFBU0w7QUFUSzs7QUFXTjs7a0JBQUEsQUFBZSIsImZpbGUiOiJQcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiJEOi9MYW1hcmFuL0ZlbWFsZSBEYWlseS9kYWlseV9mZW1hbGUifQ==