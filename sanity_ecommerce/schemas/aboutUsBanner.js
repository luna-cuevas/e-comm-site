export default {
    name: 'aboutUsBanner',
    title: 'About Us Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'About Us Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
  };