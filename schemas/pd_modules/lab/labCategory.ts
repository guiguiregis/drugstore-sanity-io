import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'labCategory',
  title: 'Lab Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Lab Category Items',
      of: [{type: 'reference', to: {type: 'labCategoryItem'}}],
    }),
  ],
})
