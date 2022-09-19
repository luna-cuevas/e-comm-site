import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from './NavBar'
import { navData, subCategoryData } from './NavBar.mock'
import { StateContext } from '../../context/StateContext'

test('NavBar should be rendered', () => {
  render(
    <StateContext>
      <NavBar navData={navData} subCategoryData={subCategoryData} />
    </StateContext>
  )
  const navBar = screen.getByTestId('NavBar')
  expect(navBar).toBeInTheDocument()
})

test('NavBar should have 3 links', () => {
  render(
    <StateContext>
      <NavBar navData={navData} subCategoryData={subCategoryData} />
    </StateContext>
  )
  const navBar = screen.getByTestId('NavBar-links')
  expect(navBar.children.length).toBe(3)
})

test('NavBar on desktop should have 5 subcategories', () => {
  render(
    <StateContext>
      <NavBar navData={navData} subCategoryData={subCategoryData} />
    </StateContext>
  )
  const navBar = screen.getByTestId('NavBar-subcategories-desktop')
  expect(navBar.children.length).toBe(5)
})

test('NavBar on mobile should have 4 subcategories', () => {
  render(
    <StateContext>
      <NavBar navData={navData} subCategoryData={subCategoryData} />
    </StateContext>
  )
  const navBar = screen.getByTestId('NavBar-subcategories-mobile')
  expect(navBar.children.length).toBe(4)
})
