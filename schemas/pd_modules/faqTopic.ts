import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqTopic',
  title: 'Faq Topic',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'body',
    }),
    defineField({
      name: 'items',
      title: 'Dropdown Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {type: 'string', name: 'title'},
            {type: 'body', name: 'description'},
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
