import styles from '../Checkout/Checkout.module.css';
import { Link } from "react-router-dom";

const Checkout = () => {
     return (
          <>
          <div className={styles.container}>
               <div className={`row`}>
                    <div>
                         <Link to='/' className={`btn btn-info col-4 m-2' ${styles.checkout__link}`}>Back to Catalogue</Link>
                         <Link to='/cart' className={`btn btn-success col-4 m-2' ${styles.checkout__link}`}>Checkout</Link>
                    </div>
               </div>
          </div>
          </>
     )
}

export default Checkout;