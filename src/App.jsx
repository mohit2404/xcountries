import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error?.message || error);
      }
    }
    fetchData();
  }, []);

  return (
    <section>
      <div className="container mx-auto py-10 grid grid-cols-2 p-4 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {data.map((country) => (
          <Country key={country.id} country={country} />
        ))}
      </div>
    </section>
  );
}

export default App;
