import "./App.css";
// import Application from "./components/applicaton/Application";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Skills skills={["Html", "Css", "javaScript"]} />
    </div>
  );
}

export default App;
