import { useContext, useState } from "react";
import { AdminContext } from "./context/AdminContext";

const Categories = () => {
  const { categories, addCategory, deleteCategory, editCategory } =
    useContext(AdminContext);

  const [newCat, setNewCat] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // ADD CATEGORY
  const handleAdd = () => {
    if (!newCat.trim()) return;
    addCategory({ name: newCat });
    setNewCat("");
  };

  // OPEN EDIT MODAL
  const openEdit = (cat) => {
    setEditId(cat.id);
    setEditValue(cat.name);
  };

  // UPDATE CATEGORY
  const handleUpdate = () => {
    if (!editValue.trim()) return;
    editCategory(editId, { name: editValue });
    setEditId(null);
    setEditValue("");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Categories</h1>

      {/* ADD CATEGORY */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="New category..."
          value={newCat}
          onChange={(e) => setNewCat(e.target.value)}
          className="border px-4 py-2 rounded w-64"
        />
        <button
          onClick={handleAdd}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Add
        </button>
      </div>

      {/* CATEGORY TABLE */}
      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Category Name</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="border-b">
              <td className="p-3">{cat.id}</td>
              <td className="p-3">{cat.name}</td>

              <td className="p-3 flex gap-3">
                <button
                  onClick={() => openEdit(cat)}
                  className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteCategory(cat.id)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT MODAL */}
      {editId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Category</h2>

            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full border px-4 py-2 rounded mb-4"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setEditId(null);
                  setEditValue("");
                }}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
