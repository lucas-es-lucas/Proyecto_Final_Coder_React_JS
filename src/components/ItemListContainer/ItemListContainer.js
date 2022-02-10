import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

const ItemListContainer = (props) => {
     return (
     <>
          <h3 className = {styles.greeting}>{props.greeting}</h3>
          <ItemList></ItemList>
     </>
     );
}
export default ItemListContainer;