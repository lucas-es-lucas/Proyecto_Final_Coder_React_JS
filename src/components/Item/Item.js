import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
     const isInStock = props.stock;

     return (
          <>
          <article className={styles.comic__container}>
               <Link to={`/item/${props.id}`} className={styles.comic__link}>
                    <div className={styles.comic__cover}>
                         <img src={props.pictureUrl} width={props.cover_size} alt='cover'></img>
                    </div>
                    <h3>{props.title}</h3>
                    <div className={styles.comic__info}>
                         <p>Editorial: {props.editorial}</p>
                         <h5>$ {props.price}</h5>
                         {
                              (isInStock)
                              ?
                              <p>Available units <strong> {props.stock}</strong></p>
                              : <p><strong>Not Available</strong></p>
                         }
                    </div>
               </Link>
          </article>
          </>
     );
}

export default Item;