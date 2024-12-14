import "./App.css";
import { Content } from "./components/content";
import { Sidebar } from "./components/sidebar";

function App() {
  // http://www.omdbapi.com/?i=tt3896198&apikey=7f75a5d7

  return (
    <div className="flex ">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
