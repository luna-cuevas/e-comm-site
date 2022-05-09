import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import heroBanner from './heroBanner'
import nav from "./nav";
import navItem from './navItem'
import link from "./link";
import itemAndLink from "./itemAndLink";
import subCategoryItemLink from "./subCategoryItemLink";
import footerBanner from './footerBanner';
import aboutUsBanner from './aboutUsBanner';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([nav, heroBanner, product, aboutUsBanner, footerBanner, navItem, link, subCategoryItemLink, itemAndLink]),
})
