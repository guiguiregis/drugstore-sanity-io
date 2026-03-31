import {defineField} from 'sanity'

export default {
  _id: 'homePage',
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImageDesktop',
      type: 'image',
      title: 'Hero Image Desktop',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'heroImageTablet',
      type: 'image',
      title: 'Hero Image Tablet',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'heroImageMobile',
      type: 'image',
      title: 'Hero Image Mobile',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle1',
      type: 'string',
      title: 'Hero Subtitle 1',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle2',
      type: 'string',
      title: 'Hero Subtitle 2',
    }),
    defineField({
      name: 'heroCta',
      title: 'Hero CTA',
      type: 'reference',
      to: {type: 'cta'},
    }),
    defineField({
      name: 'homeCards',
      type: 'array',
      title: 'Home Cards',
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
    }),
    defineField({
      name: 'mostPopularHeaderTitle',
      type: 'string',
      title: 'Most Popular Header Title',
    }),
    defineField({
      name: 'mostPopularHeaderSubtitle',
      type: 'string',
      title: 'Most Popular Header Subtitle',
    }),
    defineField({
      name: 'mostPopularProducts',
      type: 'array',
      title: 'Most Popular Products',
      of: [{type: 'reference', to: {type: 'product'}}],
    }),
    defineField({
      name: 'healthQuizHeaderTitle',
      type: 'string',
      title: 'Health Quiz Header Title',
    }),
    defineField({
      name: 'healthQuizHeaderSubTitle',
      type: 'string',
      title: 'Health Quiz Header SubTitle',
    }),
    defineField({
      name: 'healthQuizProducts',
      type: 'array',
      title: 'Health Quizz Products',
      of: [{type: 'reference', to: {type: 'quizz'}}],
    }),
    defineField({
      name: 'moreQuizBtn',
      title: 'More Quiz Button',
      type: 'reference',
      to: {type: 'cta'},
    }),
    defineField({
      name: 'supplementCollectionHeaderTitle',
      type: 'string',
      title: 'Supplement Collection Header Title',
    }),
    defineField({
      name: 'supplementCollectionHeaderSubTitle',
      type: 'string',
      title: 'Supplement Collection Header SubTitle',
    }),
    defineField({
      name: 'supplementCollectionLearnMore',
      type: 'string',
      title: 'Supplement Collection Learn More',
    }),
    defineField({
      name: 'supplementCollectionShopNow',
      type: 'string',
      title: 'Supplement Collection Shop Now',
    }),
    defineField({
      name: 'labTestsHeaderTitle',
      type: 'string',
      title: 'Lab Tests Header Title',
    }),
    defineField({
      name: 'labTestsHeaderSubTitle',
      type: 'string',
      title: 'Lab Tests Header SubTitle',
    }),
    defineField({
      name: 'labTestsProducts',
      type: 'array',
      title: 'Lab Tests Products',
      of: [{type: 'reference', to: {type: 'product'}}],
    }),
    defineField({
      name: 'yourOwnLabTitle',
      type: 'string',
      title: 'Your Own Lab Title',
    }),
    defineField({
      name: 'yourOwnLabSubtitle',
      type: 'string',
      title: 'Your Own Lab Subtitle',
    }),
    defineField({
      name: 'yourOwnLabCta',
      title: 'Your Own Lab CTA',
      type: 'reference',
      to: {type: 'cta'},
    }),
    defineField({
      name: 'informationHeader',
      type: 'string',
      title: 'Information Header',
    }),
    defineField({
      name: 'informationLearnMore',
      type: 'string',
      title: 'Information Learn More',
    }),
    defineField({
      name: 'informationArticles',
      type: 'array',
      title: 'Information Articles',
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
    }),
  ],
}
