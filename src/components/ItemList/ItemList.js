import Item from '../Item/Item';
import styles from '../ItemList/ItemList.module.css';

const ItemList = (props) => {
     return (
          <>
          <section className={styles.list__container}>
               {props.items.map(item =>
               <Item
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                    cover_size={item.cover_size}
                    stock={item.stock}
               />)}
          </section>
          </>
     );
}

export default ItemList;