import Discover from "./components/Discover";
import HomePage from "./components/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Discover/>
    </div>
  );
}

export default App;
