import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured_post',
      title: 'Featured Post',
      type: 'reference',
      to: {type: 'blogPost'},
    }),
    defineField({
      name: 'readmore',
      title: 'Read More Text',
      type: 'string',
    }),
    defineField({
      name: 'related_link',
      title: 'Related Link Text',
      type: 'string',
    }),
    defineField({
      name: 'related_products_text',
      title: 'Related Products Text',
      type: 'string',
    }),
    defineField({
      name: 'related_articles_text',
      title: 'Related Articles Text',
      type: 'string',
    }),
    defineField({
      name: 'quizz',
      title: 'Quizz Text',
      type: 'string',
    }),
    defineField({
      name: 'quizz_subtitle',
      title: 'Quiz Subtitle Text',
      type: 'string',
    }),
    defineField({
      name: 'quizz_button',
      title: 'Quiz Button Text',
      type: 'string',
    }),
    defineField({
      name: 'seeall',
      title: 'See All Text',
      type: 'string',
    }),
  ],
})
