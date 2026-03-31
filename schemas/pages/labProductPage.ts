import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'labProductPage',
  title: 'Lab Product Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'similar_products_title',
      title: 'Similar Products Title Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'test_included_text',
      type: 'object',
      title: 'Tests Included Texts',
      fields: [
        defineField({
          name: 'title',
          title: 'Title Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'biomakers',
          title: 'Biomakers Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'show',
          title: 'Show Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'hide',
          title: 'Hide Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'config_texts',
      type: 'object',
      title: 'Configurator Texts',
      fields: [
        defineField({
          name: 'rating',
          title: 'Rating Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'startingAt',
          title: 'Sarting At Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'customize',
          title: 'customize Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'signup',
          title: 'Signup Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'shippingcost',
          title: 'Shipping Cost Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'inStock',
          title: 'In Stock Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'noStock',
          title: 'Out Of Stock Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'otherFeatures',
          title: 'Other Features Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'seeAll',
      title: 'See All Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
