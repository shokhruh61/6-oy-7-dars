import React, { useState, useEffect } from "react";

function Two() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [editableUser, setEditableUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
        setEditableUser({
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({
      ...editableUser,
      [name]: value,
    });
  };

  const handleSave = () => {
    setUser({ ...editableUser });
  };

  return (
    <div className="max-w-xl mx-auto border-2 mt-6 p-2">
      <h1>Foydalanuvchi Profili</h1>

      <div>
        <label>Ism:</label>
        <input
          className="mr-6 w-full border-2 border-red-800 rounded-md p-2"
          type="text"
          name="name"
          value={editableUser.name}
          onChange={handleChange}
          style={{ marginBottom: "10px", display: "block" }}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          className="mr-6 w-full border-2 border-red-800 rounded-md p-2"
          type="email"
          name="email"
          value={editableUser.email}
          onChange={handleChange}
          style={{ marginBottom: "10px", display: "block" }}
        />
      </div>

      <div>
        <label>Telefon raqami:</label>
        <input
          className="mr-6 w-full border-2 border-red-800 rounded-md p-2"
          type="text"
          name="phone"
          value={editableUser.phone}
          onChange={handleChange}
          style={{ marginBottom: "10px", display: "block" }}
        />
      </div>

      <button onClick={handleSave} style={{ marginTop: "20px" }}>
        Saqlash
      </button>

      <h2 style={{ marginTop: "20px" }}>Tahrirlangan Ma'lumotlar</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
}

export default Two;
