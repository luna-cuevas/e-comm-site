import { render, screen } from '@testing-library/react'
import { StateContext } from '../../context/StateContext';
import NavBar from './NavBar'
import '@testing-library/jest-dom'

const navData = [{"linkUrl":null,"navTile":null,"title":"Home"},{"linkUrl":null,"navTile":{"_type":"image","asset":{"_ref":"image-6c8e6d5f6257da068318549dc15d758143f30602-2939x2757-jpg","_type":"reference"}},"title":"Products"},{"linkUrl":"contact","navTile":null,"title":"Contact Us"}]
const subCategoryData = [{"navItem":null,"title":"Home"},{"navItem":[{"itemAndLink":{"link":[{"navItemUrl":"incense","subCategory":"Incense"},{"navItemUrl":"inks","subCategory":"Inks"},{"navItemUrl":"oils","subCategory":"Oils"},{"navItemUrl":"ointments","subCategory":"Ointments"}]},"title":"Herbal Magic"},{"itemAndLink":{"link":[{"navItemUrl":"candles","subCategory":"Candles"},{"navItemUrl":"tarot-cards","subCategory":"Tarot Cards"},{"navItemUrl":"altar-tables","subCategory":"Altart Tables"},{"navItemUrl":"crystals","subCategory":"Crystals"},{"navItemUrl":"runes","subCategory":"Runes"}]},"title":"Witch Tools"},{"itemAndLink":{"link":[{"navItemUrl":"shelves","subCategory":"Shelves"},{"navItemUrl":"wall-decor","subCategory":"Wall Decor"}]},"title":"Witch Home"},{"itemAndLink":{"link":[{"navItemUrl":"books","subCategory":"Books"},{"navItemUrl":"postcards","subCategory":"Postcards"},{"navItemUrl":"witch-jewelry","subCategory":"Witch Jewelry"},{"navItemUrl":"animal-totems","subCategory":"Animal Totems"}]},"title":"Accessories"}],"title":"Products"},{"navItem":null,"title":"Contact Us"}]

test('renders title', () => {
    const { getByText } = render(<StateContext><NavBar navData={navData} subCategoryData={subCategoryData} /></StateContext>);
    const title = getByText('Luna\'s Cauldron')
    expect(title).toBeInTheDocument()
 })

 test('renders list items', () => {
    render(<StateContext><NavBar navData={navData} subCategoryData={subCategoryData} /></StateContext>);
    const listItems = screen.getAllByRole("listitem")
    expect(listItems.length).toBe(6)
 })