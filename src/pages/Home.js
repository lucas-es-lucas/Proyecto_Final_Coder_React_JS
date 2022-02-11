import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from '../media/IMG_1237.JPG';
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
     return (
          <BrowserRouter>
               <NavBar logo={logo} alt='logo' />
               <Routes>
                    <Route path="/" element={
                         <>
                              <ItemListContainer />
                         </>
                    } />
                    <Route path="/category/:idCategory" element={
                         <>
                              <ItemListContainer />
                         </>
                    } />
               </Routes>
          </BrowserRouter>
     )
};

export default Home;