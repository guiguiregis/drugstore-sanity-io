import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqPage',
  title: 'Faq Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'helpTexts',
      title: 'Help Texts',
      type: 'object',
      fields: [
        {type: 'string', name: 'liveChat'},
        {type: 'string', name: 'emailUs'},
        {type: 'string', name: 'email'},
        {type: 'string', name: 'phoneAt'},
        {type: 'string', name: 'phone'},
        {type: 'string', name: 'help'},
        {type: 'string', name: 'searchPlaceholder'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topics',
      type: 'array',
      title: 'Faq Topics',
      of: [{type: 'reference', to: {type: 'faqTopic'}}],
    }),
  ],
})
