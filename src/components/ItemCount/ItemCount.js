import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './ItemCount.module.css';

const ItemCount = ({stock, initial, onAdd}) => {
     const [cant, setCant] = useState(initial);

     const countItem = (operation) => {
          if (operation === '+') {
               if (cant < stock) {
                    setCant(cant + 1)
               }
          } else {
               if (cant > 1) {
                    setCant(cant - 1)
               }
          };
     }

     return (
          <>
          <div className={styles.container}>
               <div className={styles.controls}>
                    <button className={styles.controls__btn} onClick={() => countItem('-')}>-</button>
                    <div>{cant}</div>
                    <button className={styles.controls__btn} onClick={() => countItem('+')}>+</button>
               </div>
               <div>
                    <button className={styles.back}>
                         <Link to='/' className={styles.link__back}>Back to Catalogue</Link>
                    </button>
                    <button className={styles.add} onClick={() => onAdd(cant)}>Grab it!</button>
               </div>
          </div>
          </>
     );
}

export default ItemCount;