import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";

const Orders = () => {
  const { orders, deleteOrder, editOrder } = useContext(AdminContext);

  const handleStatusChange = (orderId, status) => {
    const updatedOrder = { ...orders.find(o => o.id === orderId), status };
    editOrder(orderId, updatedOrder);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200 border-b">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">User</th>
              <th className="p-2 text-left">Products</th>
              <th className="p-2 text-left">Total ($)</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.userName || order.userEmail}</td>
                <td className="p-2">
                  {order.products?.map(p => (
                    <div key={p.id}>
                      {p.name} x {p.quantity}
                    </div>
                  ))}
                </td>
                <td className="p-2">{order.total}</td>
                <td className="p-2">
                  <select
                    value={order.status || "pending"}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="border p-1 rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="p-2">
                  <button
                    className="text-red-500"
                    onClick={() => deleteOrder(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
