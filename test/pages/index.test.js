import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import IndexPage from './index.mock'

test('Hero should be rendered', () => {
  render(<IndexPage />)
  const hero = screen.getByTestId('hero')
  expect(hero).toBeInTheDocument()
})

test('products banner should be rendered', () => {
  render(<IndexPage />)
  const productsBanner = screen.getByTestId('products-banner')
  expect(productsBanner).toBeInTheDocument()
})

test('Check if product link renders', () => {
  render(<IndexPage />)
  const productLink = screen.getByTestId('product-link')
  expect(productLink).toBeInTheDocument()
})
