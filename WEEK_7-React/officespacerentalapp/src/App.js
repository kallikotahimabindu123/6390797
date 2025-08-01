import React from "react";

// Sample office data
const offices = [
  { id: 1, name: "Office A", rent: 55000, address: "Hyderabad" },
  { id: 2, name: "Office B", rent: 65000, address: "Bengaluru" },
  { id: 3, name: "Office C", rent: 45000, address: "Chennai" },
  { id: 4, name: "Office D", rent: 70000, address: "Mumbai" }
];

// Inline CSS for container
const containerStyle = {
  fontFamily: "Arial, sans-serif",
  padding: "20px",
  backgroundColor: "#f4f4f4",
  borderRadius: "10px",
  maxWidth: "500px",
  margin: "auto"
};

function App() {
  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center" }}>Office Space Rental App</h1>
      <img
        src="https://via.placeholder.com/400x200"
        alt="Office Space"
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "20px"
        }}
      />

      {offices.map((office) => (
        <div
          key={office.id}
          style={{
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 0 5px rgba(0,0,0,0.2)"
          }}
        >
          <h2>{office.name}</h2>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            Rent: ₹{office.rent}
          </p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
