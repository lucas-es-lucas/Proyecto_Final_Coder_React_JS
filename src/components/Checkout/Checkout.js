import { Link } from "react-router-dom";

const Checkout = (props) => {
     return (
          <>
               <button>
                    {/* <Link to='/cart'>{`Ir al Carrito ${props.cantidad}`}</Link> */}
                    <Link to='/cart'>Ir al Carrito</Link>
               </button>
          </>
     )
}

export default Checkout;