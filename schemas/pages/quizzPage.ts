import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'quizzPage',
  title: 'Quiz Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'complete',
      title: 'Complete text',
      type: 'string',
    }),
    defineField({
      name: 'next',
      title: 'Next text',
      type: 'string',
    }),
    defineField({
      name: 'previous',
      title: 'Previous text',
      type: 'string',
    }),
    defineField({
      name: 'back_to_quizzes',
      title: 'Submit Screen Back To All Quizzes Text',
      type: 'string',
    }),
    defineField({
      name: 'submit_screen',
      type: 'document',
      title: 'Submit Screen',
      fields: [
        {
          type: 'object',
          name: 'info',
          fields: [
            defineField({
              name: 'title',
              title: 'Submit Screen Title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Submit Screen Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'placeholder',
              title: 'Submit Screen Placeholder',
              type: 'string',
            }),
            defineField({
              name: 'buttonText',
              title: 'Submit Screen Button Text',
              type: 'string',
            }),
            defineField({
              name: 'noThanks',
              title: 'Submit Screen No Thanks Text',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'page_title_recommendation',
      title: 'Page Title Recommendation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'texts_header',
      type: 'object',
      title: 'Header Texts Recommendation Modal',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'button',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'texts_card',
      type: 'object',
      title: 'Cards Texts Recommendation Modal',
      fields: [
        defineField({
          name: 'rating',
          title: 'Rating',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'button',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
