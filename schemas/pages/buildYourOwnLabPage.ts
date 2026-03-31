import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'buildYourOwnLabPage',
  title: 'Build Your Own Lab Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'page_header',
      title: 'Page Header',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'search_placeholder',
      title: 'Search Placeholder',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'test_selected_text',
      type: 'object',
      title: 'Test Selected Texts',
      fields: [
        {
          type: 'object',
          name: 'texts',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'button',
              title: 'Button text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'category_texts',
      type: 'object',
      title: 'Category Texts',
      fields: [
        {
          type: 'object',
          name: 'texts',
          fields: [
            defineField({
              name: 'reset',
              title: 'Reset Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'all',
              title: 'All Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Lab Categories',
      of: [{type: 'reference', to: {type: 'labCategory'}}],
    }),
  ],
})
