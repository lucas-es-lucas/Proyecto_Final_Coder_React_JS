import styles from '../Checkout/Checkout.module.css';
import { Link } from "react-router-dom";

const Checkout = (props) => {
     return (
          <>
               <button className={styles.checkout__btn}>
                    {/* <Link to='/cart'>{`Ir al Carrito ${props.cantidad}`}</Link> */}
                    <Link to='/cart' className={styles.checkout__link}>Checkout</Link>
               </button>
          </>
     )
}

export default Checkout;