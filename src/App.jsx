import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Rover from "./pages/Rover/Rover";
import Asteroids from "./pages/Asteroids/Asteroids";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/rover" element={<Rover/>}/>
          <Route path="/asteroids" element={<Asteroids/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
    
  )
}

export default App
