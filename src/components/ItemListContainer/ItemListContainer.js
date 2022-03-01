import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';
import customFetch from '../../utils/customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const {comics} = require('../../utils/comics');
// import { collection, getDocs } from "firebase/firestore"; 
// import db from '../../utils/firebaseConfig';

const ItemListContainer = (props) => {
     const [items, setItems] = useState([]);
     const [loading, setLoading] = useState(true);
     const urlParams = useParams();

     // CONSUMIR DESDE DB EN FIRESTORE (FIREBASE)
     // useEffect(() => {
     //      // async function q se conecta a la DB y devuelve una consulta
     //      const firestoreFetch = async () => {
     //           // se conecta a la DB y devuelve una consulta
     //           const querySnapshot = await getDocs(collection(db, "comics"));
     //           // mapea el array que recibe y devuelve un array con objetos
     //           return querySnapshot.docs.map(document => (
     //                {
     //                     id: document.id,
     //                     ...document.data()
     //                }
     //           ))
     //           // querySnapshot.forEach((doc) => {
     //           //      console.log(`${doc.id} --> ${doc.data()}`);
     //           // });
     //      }
     //      // function Fecth para setear los datos de la consulta
     //      firestoreFetch()
     //           .then(consulta => setItems(consulta))
     //           .then(() => setLoading(false))
     //           .catch(error => console.log('Hubo un error en la consulta a la DB'));
     // }, [urlParams.idCategory]);

     // CONSUMIR DESDE ARCHIVO LOCAL (.JSON)
     useEffect(() => {
          if (urlParams.idCategory === undefined) {
               customFetch(2000, comics)
               .then((res) => setItems(res))
               .then(() => setLoading(false))
               .catch((err) => console.log(err))
          } else {
               customFetch(2000, comics.filter(item => item.idCategory === parseInt(urlParams.idCategory)))
               .then((res) => setItems(res))
               .then(() => setLoading(false))
               .catch((err) => console.log(err))               
          }
     }, [urlParams.idCategory]);

     return (
     <>
          <section className={styles.catalogue__container}>
               <h3 className = {styles.greeting}>{props.greeting}</h3>
               {loading ? <img src='https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif' alt='Buscando novedades...'></img> : 
               <ItemList items={items}></ItemList>}
          </section>
     </>
     );
}
export default ItemListContainer;