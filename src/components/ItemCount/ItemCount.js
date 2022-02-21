import { useState } from 'react';
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

     // const addItem = () => {
     //      alert(`${cant} units were added to your cart!`);
     //      onAdd = cant;
     //      setCant(initial);
     // }

     return (
          <>
          <div className={styles.container}>
               <div className={styles.controls}>
                    <button className={styles.controls__btn} onClick={() => countItem('+')}>+</button>
                    <div>{cant}</div>
                    <button className={styles.controls__btn} onClick={() => countItem('-')}>-</button>
               </div>
               <div>
                    <button className={styles.add} onClick={() => onAdd(cant)}>Grab it!</button>
               </div>
          </div>
          </>
     );
}

export default ItemCount;