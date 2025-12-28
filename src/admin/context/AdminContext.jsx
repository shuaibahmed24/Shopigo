import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const API = "http://localhost:5000";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  // Load all data from JSON server
  useEffect(() => {
    const load = async () => {
      try {
        const [pRes, cRes, oRes, uRes] = await Promise.all([
          fetch(`${API}/products`),
          fetch(`${API}/categories`),
          fetch(`${API}/orders`),
          fetch(`${API}/users`)
        ]);

        const [pData, cData, oData, uData] = await Promise.all([
          pRes.json(),
          cRes.json(),
          oRes.json(),
          uRes.json()
        ]);

        setProducts(pData || []);
        setCategories(cData || []);
        setOrders(oData || []);
        setUsers(uData || []);
      } catch (err) {
        console.error("AdminContext load error:", err);
      }
    };
    load();
  }, []);

  // ------------------ PRODUCTS ------------------
  const addProduct = async (product) => {
    try {
      const res = await fetch(`${API}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const newProd = await res.json();
      setProducts((prev) => [...prev, newProd]);
      return newProd;
    } catch (err) {
      console.error("addProduct error:", err);
    }
  };

  const editProduct = async (id, updatedProduct) => {
    try {
      const res = await fetch(`${API}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      const data = await res.json();
      setProducts((prev) => prev.map((p) => (p.id === id ? data : p)));
      return data;
    } catch (err) {
      console.error("editProduct error:", err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`${API}/products/${id}`, { method: "DELETE" });
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("deleteProduct error:", err);
    }
  };

  // ------------------ CATEGORIES ------------------
 // === Add Category with Sequential ID ===
const addCategory = async (category) => {
  try {
    // Generate next sequential ID
    const lastId =
      categories.length > 0
        ? Math.max(...categories.map((c) => Number(c.id)))
        : 0;

    const newCategory = {
      id: lastId + 1,
      ...category,
    };

    const res = await fetch(`${API}/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    });

    const added = await res.json();
    setCategories((prev) => [...prev, added]);

    return added;
  } catch (err) {
    console.error("addCategory error:", err);
  }
};

// === Edit Category ===
const editCategory = async (id, updatedCategory) => {
  try {
    const res = await fetch(`${API}/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updatedCategory }),
    });

    const data = await res.json();

    setCategories((prev) =>
      prev.map((c) => (c.id === id ? data : c))
    );

    return data;
  } catch (err) {
    console.error("editCategory error:", err);
  }
};

// === Delete Category ===
const deleteCategory = async (id) => {
  try {
    await fetch(`${API}/categories/${id}`, { method: "DELETE" });

    setCategories((prev) => prev.filter((c) => c.id !== id));
  } catch (err) {
    console.error("deleteCategory error:", err);
  }
};


  // ------------------ ORDERS ------------------
  const editOrder = async (id, updatedOrder) => {
    try {
      const res = await fetch(`${API}/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedOrder),
      });
      const data = await res.json();
      setOrders((prev) => prev.map((o) => (o.id === id ? data : o)));
      return data;
    } catch (err) {
      console.error("editOrder error:", err);
    }
  };

  const deleteOrder = async (id) => {
    try {
      await fetch(`${API}/orders/${id}`, { method: "DELETE" });
      setOrders((prev) => prev.filter((o) => o.id !== id));
    } catch (err) {
      console.error("deleteOrder error:", err);
    }
  };

  // ------------------ USERS ------------------
  const deleteUser = async (id) => {
    try {
      await fetch(`${API}/users/${id}`, { method: "DELETE" });
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      console.error("deleteUser error:", err);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        products,
        addProduct,
        editProduct,
        deleteProduct,
        categories,
        addCategory,
        editCategory,
        deleteCategory,
        orders,
        editOrder,
        deleteOrder,
        users,
        deleteUser,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
