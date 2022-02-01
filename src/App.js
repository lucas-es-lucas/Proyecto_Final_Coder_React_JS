import 'bootstrap/dist/css/bootstrap.min.css';import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import logo from './media/IMG_1237.JPG';

function App() {
  return (
    <>
    <NavBar logo={logo} alt='logo'></NavBar>
    <ItemListContainer greeting='Bienvenidx! Próximamente conocerás nuestro catálogo'></ItemListContainer>
    </>
  );
}

export default App;
