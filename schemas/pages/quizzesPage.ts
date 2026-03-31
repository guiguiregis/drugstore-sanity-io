import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'quizzesPage',
  title: 'Quizzes Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'second_title',
      title: 'Second Title',
      type: 'string',
    }),
    defineField({
      name: 'second_subtitle',
      title: 'Second Title',
      type: 'string',
    }),
  ],
})
