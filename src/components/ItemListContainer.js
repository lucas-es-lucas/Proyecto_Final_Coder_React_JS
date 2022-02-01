import styles from './ItemListContainer.module.css';

const ItemListContainer = (props) => {
     return (
          <>
               <h3 className={styles.greeting}>{props.greeting}</h3>
          </>
     );
}
export default ItemListContainer;