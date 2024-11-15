import { BrowserRouter, Route, Routes } from "react-router-dom"
import Notes from "./pages/Notes.jsx"
import LoginRegister from "./pages/LoginRegister.jsx"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/login" element={<LoginRegister />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App