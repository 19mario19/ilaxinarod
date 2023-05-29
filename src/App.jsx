import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import navbarData from "./data/navbarData"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Navbar list={navbarData} />
      <Home />
      <Footer text=" © 2023 Galagratoria Cyber System by Mario" />
    </div>
  )
}

export default App
