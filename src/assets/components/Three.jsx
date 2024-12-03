import React, { useState } from "react";

function Three() {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [error, setError] = useState("");

  const addCity = () => {
    setError("");

    if (!cityName || !temperature) {
      alert("Iltimos, shahar nomi va haroratni to'liq kiriting!");
      return;
    }

    const isCityExist = cities.some((city) => city.name.toLowerCase() === cityName.toLowerCase());
    if (isCityExist) {
      setError("Bu shahar allaqachon kiritilgan!");
      return;
    }

    const newCity = { id: Date.now(), name: cityName, temperature };
    setCities([...cities, newCity]);

    setCityName("");
    setTemperature("");
  };

  const editCity = (id, newTemperature) => {
    setCities(
      cities.map((city) =>
        city.id === id ? { ...city, temperature: newTemperature } : city
      )
    );
  };


  const deleteCity = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto border-2 mt-6 p-2">
      <h1>Iqlim Sharoitini Monitoring Qilish</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Shahar va haroratni kiritish formasi */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={cityName}
          placeholder="Shahar nomi"
          onChange={(e) => setCityName(e.target.value)}
          className="mr-6 w-full border-2 border-red-800 rounded-md p-2 mt-2"
        />
        <input
          type="text"
          value={temperature}
          placeholder="Temperatura (sovuq, issiq, iliq)"
          onChange={(e) => setTemperature(e.target.value)}
          className="mr-6 w-full border-2 border-red-800 rounded-md p-2 mt-2"
        />
        <button onClick={addCity} className="">Qo'shish</button>
      </div>

      <h2>Shaharlar Ro'yxati:</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {cities.map((city) => (
          <li
            key={city.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <span>
              {city.name}: {city.temperature}
            </span>
            <div>
              <button
                onClick={() => {
                  const newTemperature = prompt("Yangi haroratni kiriting:", city.temperature);
                  if (newTemperature) editCity(city.id, newTemperature);
                }}
                className="mr-6 w-full border-2 border-red-800 rounded-md p-2 mt-2"
              >
                Tahrirlash
              </button>
              <button onClick={() => deleteCity(city.id)}>O'chirish</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Three;
