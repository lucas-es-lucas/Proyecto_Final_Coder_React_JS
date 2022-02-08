import 'bootstrap/dist/css/bootstrap.min.css';import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <Header />
    <ItemListContainer greeting='Bienvenidx! Próximamente conocerás nuestro catálogo'></ItemListContainer>
    </>
  );
}

export default App;
