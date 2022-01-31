import './App.css';
import NavBar from './components/NavBar';
import logo from './media/IMG_1237.JPG';

function App() {
  return (
    <>
    <NavBar logo={logo} alt='logo'></NavBar>
      <div>
        acá irá el catálogo de la tienda
      </div>
    </>
  );
}

export default App;
