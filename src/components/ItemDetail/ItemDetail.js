import styles from './ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';
import Checkout from '../Checkout/Checkout';
import { useState } from 'react';

const ItemDetail = ({item}) => {
     const [itemQuantity, setItemQuantity] = useState(0);

     const onAdd = (cantidad) => {
          alert(`${cantidad} units were added to your cart! ITEM DETAIL`);
          console.log(cantidad);
          setItemQuantity(cantidad);
     }
     return (
          <>
          <article className={styles.comic__container}>
               <div className={styles.comic__cover}>
                    <img src={item.pictureUrl} width={item.cover_size} alt='cover'></img>
               </div>
               <h3 className={styles.comic__title}><em>{item.title}</em></h3>
               <div className={styles.comic__info}>
                    <p>{item.description}</p>
                    <h5>$ {item.price}</h5>
                    <p>Available units<strong> {item.stock}</strong></p><p></p>
               </div>
               <div className={styles.comic__cart}>
                    {itemQuantity === 0 ?
                    <ItemCount stock={item.stock} initial={itemQuantity} onAdd={onAdd}></ItemCount>
                    :
                    <Checkout /* cantidad={itemQuantity} */></Checkout>}
               </div>
          </article>
          </>
     )
}

export default ItemDetail;