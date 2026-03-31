import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Call To Action',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
        name: 'link',
        title: 'Link',
        type: 'string',
      }),
  ],
})
