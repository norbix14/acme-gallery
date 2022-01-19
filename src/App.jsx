import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Jumbotron />
      <SearchBar />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
