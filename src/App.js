import logo from "./logo.svg";
import FixedHeader from "./Components/FixedHeader";
import MainContent from "./Components/MainContent";
import SideBar from "./Components/SideBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FixedHeader />
      <MainContent />
      <SideBar />
    </div>
  );
}

export default App;
