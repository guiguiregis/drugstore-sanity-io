import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'orderTrackingPage',
  title: 'Order Tracking Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nav_links',
      type: 'array',
      title: 'Navigation Menu',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            {type: 'string', name: 'text'},
            {
              name: 'links',
              type: 'array',
              title: 'links',
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
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'track_order_texts',
      type: 'object',
      title: 'Track Order Texts',
      fields: [
        defineField({
          name: 'placedon',
          title: 'Placed On Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'contact',
          title: 'Contact Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'orderid',
          title: 'OrderId Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'total',
          title: 'Total Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'totalproducts',
          title: 'Total Products Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'status',
          title: 'Status Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'incompleteCheckout',
          title: 'Incomplete Checkout Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'copyBtn',
          title: 'Copy Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'checkoutId',
          title: 'Checkout Id Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'incompleteCheckoutStatus',
          title: 'Incomplete Checkout Status Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'tracking_texts',
      type: 'object',
      title: 'Tracking Texts',
      fields: [
        defineField({
          name: 'pdf',
          title: 'Pdf Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'labbar',
          type: 'array',
          title: 'Lab progress Bar Items',
          of: [
            {
              type: 'object',
              name: 'inline',
              fields: [
                {type: 'string', name: 'name'},
                {type: 'string', name: 'value'},
              ],
            },
          ],
        }),
        defineField({
          name: 'trackingbar',
          type: 'array',
          title: 'Shipping progress Bar Items',
          of: [
            {
              type: 'object',
              name: 'inline',
              fields: [
                {type: 'string', name: 'name'},
                {type: 'string', name: 'value'},
              ],
            },
          ],
        }),
        defineField({
          name: 'fillform',
          type: 'string',
          title: 'Fill Form Text',
        }),
        defineField({
          name: 'shipped',
          type: 'string',
          title: 'Shipped Text',
        }),
        defineField({
          name: 'trackyourorder',
          type: 'string',
          title: 'Track Your Order Text',
        }),
        defineField({
          name: 'viewmore',
          type: 'string',
          title: 'View More Text',
        }),
        defineField({
          name: 'see_all',
          type: 'string',
          title: 'See All Text',
        }),
      ],
    }),
    defineField({
      name: 'table_texts',
      type: 'object',
      title: 'Table Texts',
      fields: [
        defineField({
          name: 'orderid',
          title: 'OrderId Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'client_name',
          title: 'Client Name Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sendingDate',
          title: 'Sending Date Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'orderdate',
          title: 'Order Date Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'iteminformation',
          title: 'Item Information Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'status',
          title: 'Status Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'quantity',
          title: 'Quantity Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'next',
          title: 'Next Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'previous',
          title: 'Previous Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'page',
          title: 'Page Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'of',
          title: 'Of Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'track_order_placeholder',
      type: 'string',
      title: 'Track Order Placeholder',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
