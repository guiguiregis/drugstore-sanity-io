import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'affiliatePage',
  title: 'Affiliate Page',
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
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'image',
          title: 'Image',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'desc',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightTitle',
      title: 'Highlight Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightCards',
      title: 'Highlight Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'highlightCard',
          fields: [
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'affiliateTitle',
      title: 'Affiliate Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'affiliatePerks',
      title: 'Affiliate Perks',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'affiliatePerk',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'affiliateButton',
      title: 'Affiliate Button',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'affiliateSignupText',
      title: 'Affiliate Signup Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
