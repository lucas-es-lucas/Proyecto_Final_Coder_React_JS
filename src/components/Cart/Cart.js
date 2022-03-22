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
                         <div className={styles.cart__btn__back}>
                         <Link to='/' className={`btn btn-info ${styles.cart__link__back}`}>Back to Catalogue</Link>
                         </div>
                         {
                              (cartList.cartList.length > 0)
                              ? <div className={`btn btn-danger col-2 ${styles.cart__btn__empty}`} onClick={cartList.clear}>Empty Cart</div>
                              : <h5>Your cart is empty :/</h5>
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
               {
                    (cartList.cartList.length > 0)
                    ?
                    <section>
                         <article className={styles.cart__item__container}>
                              <div className={styles.cart__btn__back}>
                              <Link to='/' className={`btn btn-info ${styles.cart__link__back}`}>Back to Catalogue</Link>
                              </div>
                              <div className={`btn btn-success col-2 ${styles.cart__btn__buy}`} onClick={cartList.createOrder}>Buy 'em All!</div>
                              <div className={`btn btn-danger col-2 ${styles.cart__btn__empty}`} onClick={cartList.clear}>Empty Cart</div>
                         </article>
                    </section>
                    : <h3> </h3>
               }
          </>
     )
}

export default Cart;