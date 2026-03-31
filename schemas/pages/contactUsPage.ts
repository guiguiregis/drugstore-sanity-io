import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactUsPage',
  title: 'Contact Us Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactus_title',
      title: 'Contact Us Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactus_contacts',
      title: 'Contacts Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {type: 'string', name: 'title'},
            {type: 'string', name: 'field'},
            {type: 'image', name: 'image'},
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactus_description',
      title: 'Contact Us Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactus_director',
      title: 'Director',
      type: 'object',
      fields: [
        {type: 'string', name: 'name'},
        {type: 'string', name: 'position'},
        {type: 'image', name: 'image'},
      ],

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactus_form_title',
      title: 'Form Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactus_form_fields',
      title: 'Form Fields Texts',
      type: 'object',
      fields: [
        {type: 'string', name: 'name'},
        {type: 'string', name: 'email'},
        {type: 'string', name: 'number'},
        {type: 'string', name: 'subject'},
        {type: 'string', name: 'message'},
        {type: 'string', name: 'sendBtn'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'knowmore_title',
      title: 'Know More Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'knowmore_description',
      title: 'Know More Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'knowmore_btn',
      title: 'Know More Button',
      type: 'object',
      fields: [
        {type: 'string', name: 'name'},
        {type: 'string', name: 'link'},
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
