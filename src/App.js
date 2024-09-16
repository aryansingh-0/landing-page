import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./index.css";

// https://i0.wp.com/samanthadigital.com/wp-content/uploads/2023/08/Luxury-Colors-Luxury-Color-Palette-5.jpg
function App() {
  return (
    <>
      <div className=" overflow-x-hidden  w-screen ">
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
