import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/example", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          return {
            error,
            message: "Jemand hat den Stecker gezogen... 🐒",
          };
        });

      setLoading(false);
      setMessage(response.message);
    };

    fetchData();
  }, []);

  return (
    <div className="example">
      <div className="example__box">
        {!loading ? message : "Daten werden geladen..."}
      </div>
    </div>
  );
};

export default App;
