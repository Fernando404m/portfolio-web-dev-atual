import "./app.css"
import Introducao from "./introducao/introducao"
import Nav from "./nav/nav"

function App() {

  return (
    <>
      <Introducao />
      <Nav />
      <div style={{backgroundColor: "brown", height: "2000px"}}></div>
    </>
  )
}

export default App
