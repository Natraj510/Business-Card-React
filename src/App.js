import logo from './logo.svg';
import './css/App.css';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className='card-content'>
      <Info />
      <About />
      <Interests />
      <Footer />

    </div>
  );
}

export default App;
