export default {
    name: 'nav_categories',
    title: 'nav_categories',
    type: 'document',
    fields: [
        {
            name: 'mainCategory',
            title: 'mainCategory',
            type: 'string',
        },
        {
            name: 'subCategoryTitle',
            title: 'subCategoryTitle',
            type: 'array',
            of: [{type: 'string'}],
            field: {
                name: 'subCategoryItem',
                title: 'subCategoryItem',
                type: 'array',
                of: [{type: 'string'}],
            }
        },
        // {
        //     name: 'subCategoryItem',
        //     title: 'subCategoryItem',
        //     type: 'array',
        //     of: [{type: 'string'}],
        // },
    ]
  };