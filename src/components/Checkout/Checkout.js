import styles from '../Checkout/Checkout.module.css';
import { Link } from "react-router-dom";

const Checkout = (props) => {
     return (
          <>
               <div className={`row`}>
                    <div>
                         <Link to='/cart' className={`btn btn-success col-4 m-2' ${styles.checkout__link}`}>Checkout</Link>
                    </div>
               </div>
          </>
     )
}

export default Checkout;