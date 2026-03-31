import {defineField} from 'sanity'

export default {
  _id: 'collectionsPage',
  name: 'collectionsPage',
  title: 'Collections Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'texts',
      type: 'object',
      title: 'Texts',
      fields: [
        {name: 'all', type: 'string', title: 'All Products'},
        {name: 'title', type: 'string', title: 'Categories'},
        {name: 'filterBy', type: 'string', title: 'Filter by:'},
        {name: 'sortBy', type: 'string', title: 'Sort by:'},
        {name: 'previous', type: 'string', title: 'Previous'},
        {name: 'next', type: 'string', title: 'Next'},
        {name: 'page', type: 'string', title: 'Page'},
        {name: 'of', type: 'string', title: 'of'},
        {name: 'seeAll', type: 'string', title: 'See all'},
        {name: 'collectionsTitle', type: 'string', title: 'Supplement collections'},
      ],
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Menu Item Categories',
      of: [
        {
          type: 'object',
          name: 'category',
          fields: [
            {name: 'id', type: 'number', title: 'ID'},
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'slug', type: 'string', title: 'Slug'},
          ],
        },
      ],
    },
    {
      name: 'filterby_items',
      type: 'array',
      title: 'Filter by Items',
      of: [
        {
          type: 'object',
          name: 'filterItem',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'value', type: 'string', title: 'Value'},
          ],
        },
      ],
    },
    {
      name: 'sortby_items',
      type: 'array',
      title: 'Sort by Items',
      of: [
        {
          type: 'object',
          name: 'sortItem',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'value', type: 'string', title: 'Value'},
          ],
        },
      ],
    },
    {
      name: 'collections_title',
      type: 'string',
      title: 'Supplement collections title',
    },
    defineField({
      name: 'custom_categories',
      title: 'Custom Categories Item',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {type: 'string', name: 'title'},
            {type: 'string', name: 'link'},
            {type: 'image', name: 'image', title: 'Backgound Image'},
            {type: 'image', name: 'icon'},
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
}
