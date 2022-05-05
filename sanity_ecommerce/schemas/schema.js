import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import banner from './banner'
import nav from "./nav";
import navItem from './navItem'
import link from "./link";
import itemAndLink from "./itemAndLink";
import subCategoryItemLink from "./subCategoryItemLink";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, banner, nav, navItem, link, subCategoryItemLink, itemAndLink]),
})
