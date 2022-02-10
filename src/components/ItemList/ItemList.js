import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import styles from '../ItemList/ItemList.module.css';
import customFetch from '../../utils/customFetch';
const {comics} = require('../../utils/comics');

const ItemList = () => {
     const [items, setItems] = useState([]);

     useEffect(() => {
          customFetch(2000, comics)
          .then((res) => setItems(res))
          .catch((err) => console.log(err))
     }, []);

     return (
          <>
          <section className={styles.list__container}>
               {items.map(item =>
               <Item
                    key={item.id}
                    id_comic={item.id_comic}
                    title={item.title}
                    editorial={item.editorial}
                    cover={item.cover}
                    cover_size={item.cover_size}
                    stock={item.stock}
                    price={item.price}
               />)}
          </section>
          </>
     );
}

export default ItemList;