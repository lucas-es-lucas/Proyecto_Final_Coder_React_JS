const { createContext, useState } = require("react");

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
     const [cartList, setCartList] = useState([]);
     // agregar al carrito - add y update
     const addItem = (item, quantity) => {
          // validar si el produto ya está en el carrito
          if (isInCart(item.id)) {
               for (const products of cartList) {
                    if (products.id === item.id) {
                         products.qty += quantity;
                    }
               }
               // ??? hay que actualizar el estado para refrescar el CartWidget
               // setCartList([cartList]);
          } else {
               setCartList([
                    ...cartList,   //spread: agrega al contenido existente
                    {
                         // key: item.id,
                         id: item.id,
                         image: item.pictureUrl,
                         image_size: item.cover_size,
                         name: item.title,
                         price: item.price,
                         qty: quantity
                    }
               ]);
          }
          console.log(cartList);
     }
     // eliminar del carrito
     const removeItem = (idProduct) => {
          setCartList(cartList.filter(item => (item.id !== idProduct)));
     }
     // vaciar carrito
     const clear = () => {
          setCartList([]);
     }
     // validar si ya está en el carrito
     const isInCart = (idProduct) => {
          return cartList.find((item) => item.id === idProduct) ? true : false;
     }
     // totales para mostrar en el carrito
     const total_quantity = () => {
          let total = 0;

          for (const products of cartList) {
               total = total + products.qty;
               console.log(total);
          }
          return total;
     }
     // REVISAR CALCULA MALLL
     const total_cost = () => {
          let total = 0;
          
          for (const products of cartList) {
               total = total + (products.price * products.qty);
               console.log(total);
          }
          return total;
     }

     return (
          // value: todo lo que está compartido (es un objeto con estados y funciones)
          <CartContext.Provider value={{cartList, addItem, removeItem, clear, total_quantity, total_cost}}>
               {children}
          </CartContext.Provider>
     )
}

export default CartContextProvider;