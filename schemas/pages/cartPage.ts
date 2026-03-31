import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cartPage',
  title: 'Cart Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary_texts',
      title: 'Summary Texts',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'check_your_order', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'promo', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'promo_add_it', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'subtotal', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'tax', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'shipping', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'total', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'checkout', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'send_to_client', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'name_label', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'email_label', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'send_to_client_header', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'copy_link', type: 'string', validation: (Rule) => Rule.required()},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cart_texts',
      title: 'Cart Texts',
      type: 'object',
      fields: [
        {name: 'select', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'delete', type: 'string', validation: (Rule) => Rule.required()},
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
