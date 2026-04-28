import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import MyAlert from "./components/MyAlert"
import AllTheBooks from "./components/AllTheBooks"
import FantasyBooks from "./data/fantasy.json"
import HistoryBooks from "./data/history.json"
import HorrorBooks from "./data/horror.json"
import RomanceBooks from "./data/romance.json"
import ScifiBooks from "./data/scifi.json"

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1">
        <MyAlert />
        <h1 className="text-center my-4">Libri di Storia</h1>
        <AllTheBooks books={HistoryBooks} />

        <h1 className="text-center my-4">Libri Fantasy</h1>
        <AllTheBooks books={FantasyBooks} />

        <h1 className="text-center my-4">Libri Horror</h1>
        <AllTheBooks books={HorrorBooks} />

        <h1 className="text-center my-4">Romanzi</h1>
        <AllTheBooks books={RomanceBooks} />

        <h1 className="text-center my-4">Libri scientifici</h1>
        <AllTheBooks books={ScifiBooks} />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
