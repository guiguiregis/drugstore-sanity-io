import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutUsPage',
  title: 'About Us Page',
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
    defineField({
      name: 'aboutdesc_description',
      title: 'About Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'followus_title',
      title: 'Follow Us Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'followus_subtitle',
      title: 'Follow Us Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'followus_links',
      title: 'Follow Us Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {type: 'string', name: 'title'},
            {type: 'string', name: 'link'},
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
