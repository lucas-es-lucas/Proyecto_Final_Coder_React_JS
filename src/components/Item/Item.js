import styles from './Item.module.css';
import ItemCount from "../ItemCount/ItemCount";

const Item = (props) => {
     return (
          <>
          <article className={styles.comic__container}>
               <div className={styles.comic__cover}>
               <img src={props.pictureUrl} width={props.cover_size} alt='cover'></img>
                    <h3>{props.title}</h3>
               </div>
               <div className={styles.comic__info}>
                    <p>Editorial: {props.editorial}</p>
                    <h5>$ {props.price}</h5>
                    <p>Available units {props.stock}</p>
               </div>
               <div className={styles.comic__cart}>
                    <ItemCount stock={props.stock} initial={1}></ItemCount>
               </div>
          </article>
          </>
     );
}

export default Item;