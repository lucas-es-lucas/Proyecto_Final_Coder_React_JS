import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import styles from '../Cart/Cart.module.css';
import { Link } from "react-router-dom";

const Cart = () => {
     const cartList = useContext(CartContext);

     return (
          <>
               <section>
                    <h1>This is your cart!</h1>
                    <article className={styles.cart__item__container}>
                         <button className={styles.cart__btn}>
                         <Link to='/'>Back to Catalogue</Link>
                         </button>
                         {
                              (cartList.cartList.length > 0)
                              ? <button className={styles.cart__btn} onClick={cartList.clear}>Empty Cart</button>
                              : <h5>Your cart is empty :(</h5>
                         }
                    </article>
                    {
                         (cartList.cartList.length > 0)
                         ?
                         <article className={styles.cart__item__container}>
                              <span>Code</span>
                              <span>Cover</span>
                              <span>Title</span>
                              <span>Qty</span>
                              <span>$</span>
                              <span>Subtotal</span>
                              <span></span>
                         </article>
                         : <h3> </h3>                    
                    }

                    {
                         (cartList.cartList.length > 0)
                         ?
                         cartList.cartList.map(item =>
                         <article key={item.id} className={styles.cart__item__container}>
                              <p>{item.id}</p>
                              <img className={styles.cart__item__cover} src={item.image} width={item.image_size}  alt='product_image'></img>
                              <h4 className={styles.cart__item__title}>{item.name}</h4>
                              <p className={styles.cart__item__info}>{item.qty}</p>
                              <p className={styles.cart__item__info}>{item.price}</p>
                              <p className={styles.cart__item__info}>{item.price * item.qty}</p>
                              <button onClick={() => cartList.removeItem(item.id)}>Delete</button>
                         </article>
                         )
                         : <h3> </h3>
                    }
               </section>
               <section>
                    {
                         (cartList.cartList.length > 0)
                         ?
                         <article className={styles.cart__item__container}>
                              <h5>TOTAL</h5>
                              <span>Products {cartList.total_quantity()}</span>
                              <span>Cost {cartList.total_cost()}</span>
                         </article>
                         : <h3> </h3>
                    }
               </section>
               <section>
                    {
                         (cartList.cartList.length > 0)
                         ?
                         <article className={styles.cart__item__container}>
                              <button className={styles.cart__btn}>
                              <Link to='/'>Back to Catalogue</Link>
                              </button>
                              <button className={styles.cart__btn} onClick={cartList.clear}>Empty Cart</button>
                              <button className={styles.cart__btn} onClick={cartList.createOrder}>Buy 'em All!</button>
                         </article>
                         : <h3> </h3>
                    }
               </section>
          </>
     )
}

export default Cart;