import style from './CartWidget.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import Counter from '../Counter/Counter';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const CartWidget = (props) => {
     const cartList = useContext(CartContext);

     console.log(cartList);

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