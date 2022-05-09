export default {
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'document',
  fields: [
      {
          name: 'bgImageDesktop',
          title: 'Background Image - Desktop',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
        name: 'bgImageMobile',
        title: 'Background Image - Mobile',
        type: 'image',
        options: {
            hotspot: true,
        },
    },
      {
          name: 'tagline',
          title: 'tagline',
          type: 'string',
      },
      {
          name: 'aboveTagline',
          title: 'aboveTagline',
          type: 'string',
      },
      
  ],
};