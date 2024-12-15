import "./App.css";
import { Dashboar } from "./components/dashboard";
import { Header } from "./components/header";

function App() {
  return (
    <main className=" antialiased">
      <Header />
      <Dashboar />
    </main>
  );
}

export default App;
