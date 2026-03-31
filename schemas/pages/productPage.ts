import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'productPage',
  title: 'Product Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'carousel_title',
      title: 'Carousel Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'config_texts',
      title: 'Configuration Texts',
      type: 'object',
      fields: [
        {name: 'rating', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'addToCart', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'shippingCost', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'inStock', type: 'string', validation: (Rule) => Rule.required()},
        defineField({
          name: 'noStock',
          title: 'Out Of Stock Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        {name: 'whyWeUse', type: 'string', validation: (Rule) => Rule.required()},
      ],
    }),
    defineField({
      name: 'supplements_title',
      title: 'Supplements Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'supplements_image',
      title: 'Supplements Image',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'review_title',
      title: 'Review Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'review_texts',
      title: 'Review Texts',
      type: 'object',
      fields: [
        {
          name: 'options',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.required(),
        },
        {name: 'verified', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'review', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'showMore', type: 'string', validation: (Rule) => Rule.required()},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'similar_product_title',
      title: 'Similar Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'our_product_title',
      title: 'Our Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'our_products',
      title: 'Our Products',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {type: 'string', name: 'title'},
            {name: 'svgColor', title: 'Icon Color', type: 'color'},
            {name: 'titleColor', title: 'Title Color', type: 'color'},
            {type: 'string', name: 'link'},
            {type: 'image', name: 'image'},
          ],
        },
      ],
    },
  ],
})
