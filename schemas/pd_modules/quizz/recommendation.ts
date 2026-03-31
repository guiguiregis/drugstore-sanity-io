import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recommendation',
  title: 'Recommendation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title Of Recommendation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'handle',
      title: 'Handle ( Fill Title field first and click generate )',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'collection',
      type: 'array',
      title: 'Products',
      of: [{type: 'reference', to: {type: 'product'}}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
