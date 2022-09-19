import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Product from './Product'
import { products } from '../.././test/pages/index.mock'

test('Product should be rendered', () => {
  render(<Product product={products[0]} />)
  const product = screen.getByTestId('product')
  expect(product).toBeInTheDocument()
})

test('Product should have an image', () => {
  render(<Product product={products[0]} />)
  const product = screen.getByTestId('product-image')
  expect(product).toBeInTheDocument()
})

test('Product should have a name', () => {
  render(<Product product={products[0]} />)
  const product = screen.getByTestId('product-name')
  expect(product).toBeInTheDocument()
})

test('Product should have a price', () => {
  render(<Product product={products[0]} />)
  const product = screen.getByTestId('product-price')
  expect(product).toBeInTheDocument()
})
