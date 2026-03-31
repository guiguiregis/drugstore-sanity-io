import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'quizzQuestion',
  title: 'Quiz Question',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answers',
      type: 'array',
      title: 'Answers',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {type: 'string', name: 'title', validation: (Rule) => Rule.required()},
            {type: 'boolean', name: 'reRoute', title: 'Re-route to another question ?'},
            {type: 'number', name: 'nextQuestion', title: 'Next question'},
            {
              name: 'recommendation',
              title: 'Recommendation',
              type: 'reference',
              to: {type: 'recommendation'},
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
