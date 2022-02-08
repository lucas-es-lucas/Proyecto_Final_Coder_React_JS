import style from './CartWidget.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import Counter from '../Counter/Counter';

const CartWidget = (props) => {
     return (
          <>
          <button className={style.cart}>
               <FiShoppingCart className={style.cart__icon} />
               <Counter cant={props.cant} />
          </button>
          </>
     );
}

export default CartWidget;