import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import banner from './banner'
import nav_categories from './nav_categories'
import nav from "./nav";
import navItem from './navItem'
import link from "./link";
import subCategoryItem from "./subCategoryItem";
import subCategoryItemLink from "./subCategoryItemLink";

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, banner, nav_categories, nav, navItem, link, subCategoryItem, subCategoryItemLink]),
})
