import "./App.css";
import Navbar from "./components/Navbar";
import Agradecimento from "./pages/Agradecimento";
import Convite from "./pages/Convite";
import Turma from "./pages/Turma";

function App() {
  return (
    <main className="relative ">
      <Navbar />
      <Convite />
      <Turma />
      <Agradecimento />
    </main>
  );
}

export default App;
