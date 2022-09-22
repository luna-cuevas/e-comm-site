import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from './Cart'
import {
  StateContext,
  updateCartItemQty,
  setCartItems,
  addToCart,
} from '../../context/StateContext'
import { products } from '../.././test/pages/index.mock'

// test('Cart should be rendered', () => {
//   render(
//     <StateContext addToCart={() => addToCart(products[0], 1)}>
//       <Cart />
//     </StateContext>
//   )

//   const cart = screen.getByTestId('cart-quantity')
//   expect(cart).toBeInTheDocument()
// })

// test('clicking the button toggles an answer on/off', () => {
//   render(
//     <StateContext>
//       <Cart />
//     </StateContext>
//   )
//   const button = screen.getByRole('button')

//   fireEvent.click(button)
//   // Here you'd want to test if `<FiMinusCircle />` is rendered.
//   expect(/* something from FiMinusCircle */).toBeInTheDocument()
//   expect(screen.getByText('Yes, it is.')).toBeInTheDocument()

// })
