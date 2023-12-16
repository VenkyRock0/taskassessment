import "./App.css";
import InfiniteScrolling from "./infiniteLoop/infiniteLoop";
import Navbar from "./navbar/navbar";
import Pricing from "./Pricing/pricing";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Pricing />
      <InfiniteScrolling />
    </div>
  );
}

export default App;
