import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import styles from '../Cart/Cart.module.css';

const Cart = () => {
     const cartList = useContext(CartContext);

     return (
          <>
               <section>
                    <h1>This is your cart!</h1>
                    <article className={styles.cart__item__container}>
                              <span>Article Code</span>
                              <span>Title</span>
                              <span>Cant</span>
                              <span>$</span>
                              <button onClick={cartList.clear}>Empty Cart</button>
                         </article>
                    {
                         cartList.cartList.map(item =>
                         <article className={styles.cart__item__container}>
                              <p>{item.id}</p>
                              <img className={styles.cart__item__cover} src={item.image} width={item.image_size}  alt='product_image'></img>
                              <h4 className={styles.cart__item__title}>{item.name}</h4>
                              <p className={styles.cart__item__info}>{item.qty}</p>
                              <p className={styles.cart__item__info}>{item.price}</p>
                              <button onClick={() => cartList.removeItem(item.id)}>Delete from your cart</button>
                         </article>
                         )
                    }
               </section>
               {/* <section>
                    <article className={styles.cart__item__cart}>
                         <button onClick={cartList.clear}>Empty Cart</button>
                    </article>
               </section> */}
          </>
     )
}

export default Cart;