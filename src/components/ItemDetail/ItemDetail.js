import styles from './ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
     return (
          <>
          <article className={styles.comic__container}>
               <div className={styles.comic__cover}>
                    <img src={item.pictureUrl} width={item.cover_size} alt='cover'></img>
               </div>
               <h3 className={styles.comic__title}><em>{item.title}</em></h3>
               <div className={styles.comic__info}>
                    <p>{item.description}</p>
                    <h5>$ {item.price}</h5>
                    <p>Available units<strong> {item.stock}</strong></p><p></p>
               </div>
               <div className={styles.comic__cart}>
                    <ItemCount stock={item.stock} initial={1}></ItemCount>
               </div>
          </article>
          </>
     )
}

export default ItemDetail;