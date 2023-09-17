import Header from "./components/Header/Header";
// import DaisyNav from "./components/Header/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
    </div>
  )
}

export default App
