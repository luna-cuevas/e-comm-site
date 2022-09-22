import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductDetails from '../../pages/product/[slug]'
import { products } from './index.mock'
import { navData, subCategoryData } from '../../components/NavBar/NavBar.mock'
import { StateContext } from '../../context/StateContext'

test('ProductDetails should be rendered', () => {
  render(
    <StateContext>
      <ProductDetails
        products={products}
        product={products[0]}
        navData={navData}
        subCategoryData={subCategoryData}
      />
    </StateContext>
  )
  const productDetails = screen.getByTestId('ProductDetails')
  expect(productDetails).toBeInTheDocument()
})

test('ProductDetails desktop should have a product image', () => {
  render(
    <StateContext>
      <ProductDetails
        products={products}
        product={products[0]}
        navData={navData}
        subCategoryData={subCategoryData}
      />
    </StateContext>
  )
  const productDetails = screen.getByTestId('product-image-desktop')
  expect(productDetails).toBeInTheDocument()
})

test('ProductDetails mobile should have a product image', () => {
  render(
    <StateContext>
      <ProductDetails
        products={products}
        product={products[0]}
        navData={navData}
        subCategoryData={subCategoryData}
      />
    </StateContext>
  )
  const productDetails = screen.getByTestId('product-image-mobile')
  expect(productDetails).toBeInTheDocument()
})
