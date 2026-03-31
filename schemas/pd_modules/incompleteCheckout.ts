import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'incompleteCheckout',
  title: 'Incomplete Checkout',
  type: 'document',
  fields: [
    defineField({
      name: 'customer_name',
      title: 'Customer Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Customer Email',
      type: 'string',
    }),
    defineField({
      name: 'placed_on',
      title: 'Order Placed On',
      type: 'string',
    }),
    defineField({
      name: 'practitioner',
      title: 'Practitioner Email',
      type: 'string',
    }),
    defineField({
      name: 'orderId',
      title: 'Order Id',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'Cart Id',
      type: 'string',
    }),
    defineField({
      name: 'affiliate',
      title: 'Affiliate Id',
      type: 'string',
    }),
    defineField({
      name: 'checkoutUrl',
      title: 'Checkout Url',
      type: 'string',
    }),
    {
      name: 'line_items',
      type: 'array',
      title: 'Checkout Items',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            defineField({
              name: 'id',
              title: 'Id',
              type: 'string',
            }),
            defineField({
              name: 'name',
              title: 'Product Name',
              type: 'string',
            }),
            defineField({
              name: 'gid',
              title: 'GID Product',
              type: 'string',
            }),
            defineField({
              name: 'productId',
              title: 'Product Id',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            }),
            defineField({
              name: 'image',
              title: 'Product Image',
              type: 'string',
            }),
          ],
        },
      ],
    },
  ],
})
