import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Equipments from "./pages/Equipments"

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/equipments" element={<Equipments />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
