import { BrowserRouter, Route, Routes } from "react-router-dom"
import Notes from "./pages/Notes.jsx"
import LoginRegister from "./pages/LoginRegister.jsx"

function App() {
  return (
    <div id="app">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/login" element={<LoginRegister />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App