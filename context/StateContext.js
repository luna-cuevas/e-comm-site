import {
    useContext, 
    createContext, 
    useState, 
    useEffect} from 'react';

import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const incrementQty = () => {
    setQty((qty) => qty + 1);
  }

  const decrementQty = () => {
    // if quantity is greater than 1, return quantity - 1 else return 1
    setQty((qty) => { qty > 1 ? qty - 1 : 1 });
  }

  const addToCart = (product, quantity) => {
    // check if product already exists in cart
    const checkCart = cartItems.find((item) => item._id === product._id);

    // updates total price and quantity of cart
    setTotalPrice((totalPrice) => totalPrice + product.price * quantity);
    setTotalQuantity((totalQuantity) => totalQuantity + quantity);

    // if product does not exist in cart, add product to cart
    if (checkCart) {

      // update quantity
      const newCartItems = cartItems.map((item) => {
        //checks if product id matches the item we're adding
        if (item._id === product._id) 
          //if id's match, then we update the quantity
          return {
            ...item,
            quantity: item.quantity + quantity,
          }
      })

      // update cart
      setCartItems(newCartItems);
    } else  {

      // if product already exists, update quantity
      product.quantity = quantity;
      setCartItems([...cartItems, {...product}]);
    }

    // display success message
    toast.success(`${qty} ${product.name} added to cart`);
  }

  const removeFromCart = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - foundProduct.quantity);
    setCartItems(newCartItems);

  }

  const updateCartItemQty = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === 'increment') {
      
      setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1 }]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);
    } else if (value === 'decrement') {
      if(foundProduct.quantity > 1) {
        setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity - 1 }]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);
      }

    }
  }

  return (
    <Context.Provider
      value={{
        showCart, 
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        incrementQty,
        decrementQty,
        addToCart,
        setShowCart,
        updateCartItemQty,
        removeFromCart,
        setCartItems,
        setTotalPrice,
        setTotalQuantity
      }}
    >
      {children} 
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);