import { BrowserRouter, Route, Routes } from "react-router-dom"
import First from "./Pages/First"
import Nexxt from "./Pages/Nexxt"
import Calcu from "./Pages/Calcu"

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<First />} />
    <Route path="/next" element={<Nexxt />}/>
    <Route path="/calcu" element={<Calcu/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
