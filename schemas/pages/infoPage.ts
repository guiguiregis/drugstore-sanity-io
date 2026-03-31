import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infoPage',
  title: 'Info Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'handle',
      title: 'Page Handle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'body',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
