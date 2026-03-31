import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ifcaPage',
  title: 'Ifca Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'who_are_we_title',
      title: 'Who We Are Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'who_are_we_description',
      title: 'Who We Are Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'founder_title',
      title: 'Founder Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'founder_description',
      title: 'Founder Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'founder_image',
      title: 'Founder Picture',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
