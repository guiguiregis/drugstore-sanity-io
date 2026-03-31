import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'quizz',
  title: 'Quiz',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'handle',
      title: 'Handle (Fill Name field first and click generate )',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'generic',
      title: 'Generic Recommendations',
      type: 'reference',
      to: {type: 'recommendation'},
    }),
    defineField({
      name: 'questions',
      type: 'array',
      title: 'Questions',
      of: [{type: 'reference', to: {type: 'quizzQuestion'}}],
    }),
  ],
})
