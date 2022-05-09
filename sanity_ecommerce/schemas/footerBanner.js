export default {
    name: 'footerBanner',
    title: 'Footer Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Product of the Month',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'product',
            title: 'Product Slug',
            type: 'string',
        },
        {
            name: 'productTitle',
            title: 'Product Title',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price of Product',
            type: 'string',
        },
        {
            name: 'bannerText',
            title: 'Banner Text, left side',
            type: 'string',
        },
    ],
  };