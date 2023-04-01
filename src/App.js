import './App.css';
import PopularBooks from './components/PopularBooks';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <PopularBooks/>
      </main>
    </div>
  );
}

export default App;
