import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Stores() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    api.get("/stores")
      .then(res => setStores(res.data))
      .catch(() => alert("Error loading stores"));
  }, []);

  return (
    <div>
      <h2>Stores</h2>

      {stores.length === 0 && <p>No stores found</p>}

      {stores.map(store => (
        <div key={store.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h4>{store.name}</h4>
          <p>{store.address}</p>
          <Link to={`/rate/${store.id}`}>Rate Store</Link>
        </div>
      ))}
    </div>
  );
}

export default Stores;