import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyAlert from "./components/MyAlert"
import AllTheBooks from "./components/AllTheBooks"

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1">
        <MyAlert />
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
