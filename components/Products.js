import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <header>
        {/* <p>Welcome, {userData.username}</p> */}
        {/* <button onClick={() => handleLogout()}>Logout</button> */}
      </header>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {currentItems.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.status}</td>
              <td>
                <button onClick={() => handleView(product.id)}>View</button>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <div className="pagination">
        {/* {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))} */}
      </div>
    </div>
  );
}

export default Products;
