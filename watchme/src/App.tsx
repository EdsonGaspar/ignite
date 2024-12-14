import { useEffect, useState } from "react";
import "./App.css";
import { Content } from "./components/content";
import { Sidebar } from "./components/sidebar";

function App() {
  const [getApi, setGetApi] = useState([]);
  // http://www.omdbapi.com/?i=tt3896198&apikey=7f75a5d7

  useEffect(() => {
    const fetchGetApi = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=7f75a5d7"
      );
      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }
      const result = await response.json();
      setGetApi(result);
    };

    fetchGetApi();
  }, []);

  return (
    <div className="flex ">
      <Sidebar />
      {/* {getApi.map((item) => (
        <Content key={item.Title} />
      ))} */}
    </div>
  );
}

export default App;
