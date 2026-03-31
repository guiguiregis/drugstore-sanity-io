import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'review',
  title: 'Product Review',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Created at',
      type: 'string',
    }),
    defineField({
      name: 'customer',
      title: 'Customer',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
    }),
    defineField({
      name: 'productTitle',
      title: 'Product Title',
      type: 'string',
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'string',
    }),
    // array of images
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
  ],
})
