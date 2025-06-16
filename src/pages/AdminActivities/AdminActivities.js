

// import React, { useEffect, useState, lazy, Suspense } from 'react';
// import axios from 'axios';
// import totalData from '../../json/data.json';
// import { useNavigate } from 'react-router-dom';
// import "./AdminActivities.css";

// // ✅ Lazy load the ProductList component
// const ProductList = lazy(() => import('../../components/DynamicListGrid/DynamicListGrid'));

// const AdminActivities = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const fields = totalData[19].AdminActivities;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://pranusha.vercel.app/activities');
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching activities:', error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <p>Loading activities...</p>;
//   }

//   return (
//     <div className="admin-products">
//       <h2>Product List</h2>
//       <button onClick={() => navigate('/admin/activities')}>
//         Create New Product
//       </button>

//       {/* ✅ Wrap lazy-loaded component in Suspense */}
//       <Suspense fallback={<p>Loading component...</p>}>
//         <ProductList
//           products={products}
//           fields={fields}
//           redirect={totalData[19].AdminProjectsEdit}
//           deleteApi="https://pranusha.vercel.app/projects"
//         />
//       </Suspense>
//     </div>
//   );
// };

// export default AdminActivities;


import React, { useEffect, useState, lazy, Suspense } from 'react';
import axios from 'axios';
import { getStoredData } from '../../json/fetchData'; // 👈 Replace direct import
import { useNavigate } from 'react-router-dom';
import "./AdminActivities.css";

// ✅ Lazy load the ProductList component
const ProductList = lazy(() => import('../../components/DynamicListGrid/DynamicListGrid'));

const AdminActivities = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const totalData = getStoredData(); // 👈 Get data using function
  const fields = totalData[17].AdminActivities;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://aspwppl-backend.vercel.app/activities');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching activities:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading activities...</p>;
  }

  return (
    <div className="admin-products">
      <h2>Product List</h2>
      <button onClick={() => navigate('/admin/activities')}>
        Create New Product
      </button>

      {/* ✅ Wrap lazy-loaded component in Suspense */}
      <Suspense fallback={<p>Loading component...</p>}>
        <ProductList
          products={products}
          fields={fields}
          redirect={totalData[17].AdminProjectsEdit}
          deleteApi="https://aspwppl-backend.vercel.app/projects"
        />
      </Suspense>
    </div>
  );
};

export default AdminActivities;

