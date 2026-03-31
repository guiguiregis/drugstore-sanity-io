import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'handle',
      title: 'Handle (Fill title field first and click generate )',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [{type: 'string', name: 'tag', title: 'Tag name'}],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blogger',
      title: 'Blogger Info',
      type: 'object',
      fields: [
        {type: 'string', name: 'name'},
        {type: 'image', name: 'image'},
        {type: 'string', name: 'readtime'},
        {type: 'date', name: 'posted'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'body',
    }),
    defineField({
      name: 'related_posts',
      type: 'array',
      title: 'Related Posts',
      of: [{type: 'reference', to: {type: 'blogPost'}}],
    }),
    defineField({
      name: 'related_products',
      type: 'array',
      title: 'Related Products',
      of: [{type: 'reference', to: {type: 'product'}}],
    }),
  ],
})
