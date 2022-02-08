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

     const addItem = () => {
          alert(`Vas a agregar ${cant} unidades al carrito`);
          onAdd = cant;
          // console.log(onAdd);
          setCant(initial);
     }

     return (
          <>
          <div className={styles.container}>
               {/* <p className={styles.name}>Ejemplares disponibles: {stock}</p> */}
               <div className={styles.controls}>
                    <button className={styles.controls__btn} onClick={() => countItem('+')}>+</button>
                    <div>{cant}</div>
                    <button className={styles.controls__btn} onClick={() => countItem('-')}>-</button>
               </div>
               <div>
                    <button className={styles.add} onClick={addItem}>Lo quiero!</button>
               </div>
          </div>
          </>
     );
}

export default ItemCount;