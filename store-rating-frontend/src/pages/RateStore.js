import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function RateStore() {
  const { id } = useParams();
  const [rating, setRating] = useState(5);

  const submitRating = async () => {
    try {
      await api.post("/rate", {
        store_id: id,
        rating,
      });
      alert("Rating submitted");
    } catch {
      alert("Error rating store");
    }
  };

  return (
    <div>
      <h2>Rate Store</h2>
      <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} />
      <button onClick={submitRating}>Submit</button>
    </div>
  );
}

export default RateStore;