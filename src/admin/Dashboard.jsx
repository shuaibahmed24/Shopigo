import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";

const Dashboard = () => {
  const { products, orders, users, categories } = useContext(AdminContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-4 gap-6">
        <div className="p-4 bg-blue-500 text-white rounded">
          <h2 className="text-xl font-bold">Products</h2>
          <p className="text-2xl">{products.length}</p>
        </div>
        <div className="p-4 bg-green-500 text-white rounded">
          <h2 className="text-xl font-bold">Orders</h2>
          <p className="text-2xl">{orders.length}</p>
        </div>
        <div className="p-4 bg-yellow-500 text-white rounded">
          <h2 className="text-xl font-bold">Users</h2>
          <p className="text-2xl">{users.length}</p>
        </div>
        <div className="p-4 bg-purple-500 text-white rounded">
          <h2 className="text-xl font-bold">Categories</h2>
          <p className="text-2xl">{categories.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
