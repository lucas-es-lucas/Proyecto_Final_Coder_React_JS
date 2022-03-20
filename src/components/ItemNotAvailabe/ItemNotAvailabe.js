import { Link } from "react-router-dom";
import styles from './ItemNotAvailabe.module.css';

const ItemCount = () => {
     return (
          <>
          <div className={styles.container}>
               {/* <div>
                    <input className={styles.notAvailable_email} placeholder='Enter your email here'></input>
               </div>
               <div>
                    <button className={styles.notAvailable_btn}>Email me when it's back</button> */}
                    <button className={styles.back}>
                         <Link to='/' className={styles.link__back}>Back to Catalogue</Link>
                    </button>
               {/* </div> */}
          </div>
          </>
     )
}

export default ItemCount;