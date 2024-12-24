import "./App.css";
import { Dashboar } from "./components/dashboard";
import { Header } from "./components/header";

function App() {
  return (
    <main className=" antialiased h-screen">
      <Header />
      <Dashboar />
    </main>
  );
}

export default App;
