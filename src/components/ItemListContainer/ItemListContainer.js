import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';
import customFetch from '../../utils/customFetch';
import { useEffect, useState } from 'react';
const {comics} = require('../../utils/comics');

const ItemListContainer = (props) => {
     const [items, setItems] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          customFetch(2000, comics)
          .then((res) => setItems(res))
          .then(() => setLoading(false))
          .catch((err) => console.log(err))
     }, []);

     return (
     <>
          <section className={styles.catalogue__container}>
               <h3 className = {styles.greeting}>{props.greeting}</h3>
               {loading ? <img className={styles.img__loading} src='https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif' alt='Buscando novedades...'></img> : 
               <ItemList items={items}></ItemList>}
          </section>

     </>
     );
}
export default ItemListContainer;