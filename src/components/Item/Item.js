import styles from './Item.module.css';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const Item = (props) => {
     return (
          <>
          <article className={styles.comic__container}>
               <div className={styles.comic__cover}>
                    <Link to={`/item/${props.id}`}>
                         <img src={props.pictureUrl} width={props.cover_size} alt='cover'></img>
                    </Link>
               </div>
               <h3>{props.title}</h3>
               <div className={styles.comic__info}>
                    <p>Editorial: {props.editorial}</p>
                    <h5>$ {props.price}</h5>
                    <p>Available units <strong> {props.stock}</strong></p>
               </div>
               <div className={styles.comic__cart}>
                    <ItemCount stock={props.stock} initial={1}></ItemCount>
               </div>
          </article>
          </>
     );
}

export default Item;