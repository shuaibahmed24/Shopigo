import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "./context/AdminContext";

const Products = () => {
  const { products, deleteProduct } = useContext(AdminContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-200 border-b">
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Price ($)</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{product.id}</td>
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">{product.price}</td>
              <td className="p-2">
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => navigate(`/admin/edit-product/${product.id}`)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
