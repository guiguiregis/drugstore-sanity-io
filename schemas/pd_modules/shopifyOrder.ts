import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'shopifyOrder',
  title: 'Shopify Order',
  type: 'document',
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
      name: 'email',
      title: 'Customer Email',
      type: 'string',
    }),
    defineField({
      name: 'customer_name',
      title: 'Customer Name',
      type: 'string',
    }),
    defineField({
      name: 'dob',
      title: 'Date Of Birth',
      type: 'string',
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
    }),
    defineField({
      name: 'buyer_first_name',
      title: 'Buyer First Name',
      type: 'string',
    }),
    defineField({
      name: 'buyer_last_name',
      title: 'Buyer Last Name',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Shipping Address',
      type: 'string',
    }),
    defineField({
      name: 'placed_on',
      title: 'Order Placed On',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'fulfillment_status',
      title: 'Fullfillment Status',
      type: 'string',
    }),
    defineField({
      name: 'affiliate',
      title: 'Affiliate Id',
      type: 'string',
    }),
    defineField({
      name: 'shipment_status',
      title: 'Shipment Status',
      type: 'string',
    }),
    defineField({
      name: 'tracking_number',
      title: 'Tracking #',
      type: 'string',
    }),
    defineField({
      name: 'tracking_url',
      title: 'Tracking Url',
      type: 'string',
    }),
    defineField({
      name: 'practitioner',
      title: 'Practitioner Email',
      type: 'string',
    }),
    {
      name: 'line_items',
      type: 'array',
      title: 'Line Items',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            defineField({
              name: 'id',
              title: 'Id',
              type: 'number',
            }),
            defineField({
              name: 'name',
              title: 'Product Name',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Price',
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
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'string',
            }),
            defineField({
              name: 'fulfillment_status',
              title: 'Fullfillment Status',
              type: 'string',
            }),
            defineField({name: 'fulfillment_date', title: 'Fullfillment Date', type: 'string'}),
            defineField({
              name: 'is_lab',
              title: 'is Lab ?',
              type: 'boolean',
            }),
            defineField({
              name: 'shipment_status',
              title: 'Shipment Status',
              type: 'string',
            }),
            defineField({
              name: 'tracking_number',
              title: 'Tracking #',
              type: 'string',
            }),
            defineField({
              name: 'tracking_url',
              title: 'Tracking Url',
              type: 'string',
            }),
            {
              title: 'Lab Status',
              name: 'lab_status',
              type: 'string',
              initialValue: 'fill',
              options: {
                list: [
                  {title: 'Fill Requisition', value: 'fill'},
                  {title: 'Pending Lab', value: 'pendingLab'},
                  {title: 'Pending Results', value: 'pendingResults'},
                  {title: 'View Results!', value: 'done'},
                ], // <-- predefined values
              },
            },
            defineField({
              name: 'pdf_file',
              title: 'Pdf',
              type: 'file',
            }),
          ],
        },
      ],
    },
  ],
})
