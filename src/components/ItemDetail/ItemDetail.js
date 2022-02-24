import styles from './ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';
import Checkout from '../Checkout/Checkout';
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';

const ItemDetail = ({item}) => {
     const [itemQuantity, setItemQuantity] = useState(1);
     const [isCheckout, setIsCheckout] = useState(false);
     const cartList = useContext(CartContext);

     // console.log(isCheckout);

     const onAdd = (quantity) => {
          alert(`${quantity} units were added to your cart! ITEM DETAIL`);
          // console.log(quantity);
          setItemQuantity(quantity);
          cartList.addItem(item, quantity);
          setIsCheckout(true);
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
                    {isCheckout ?
                    <Checkout cantidad={itemQuantity}></Checkout>
                    :
                    <ItemCount stock={item.stock} initial={itemQuantity} onAdd={onAdd}></ItemCount>}
               </div>
          </article>
          </>
     )
}

export default ItemDetail;