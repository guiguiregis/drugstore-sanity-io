import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'labCategoryItem',
  title: 'Lab Category Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Value Of Item',
      type: 'string',
    }),
  ],
})
