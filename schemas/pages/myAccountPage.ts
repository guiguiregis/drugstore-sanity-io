import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'myAccountPage',
  title: 'My Account Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page_title',
      title: 'Page title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'NAV_LINKS',
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
      name: 'PASSWORD_CHANGE_TITLE',
      type: 'string',
      title: 'Password Change Title',
    }),
    defineField({
      name: 'PASSWORD_CHANGE_SUBTITLE',
      type: 'string',
      title: 'Password Change SubTitle',
    }),
    defineField({
      name: 'PASSWORD_BUTTONS',
      type: 'object',
      title: 'Password Buttons Texts',
      fields: [
        defineField({
          name: 'submit',
          title: 'Submit Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'cancel',
          title: 'Cancel Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PASSWORD_CHANGE_NEW_PASSWORD',
      type: 'object',
      title: 'Password Change New Password Texts',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PASSWORD_CHANGE_CONFIRM_PASSWORD',
      type: 'object',
      title: 'Password Change Confirm Password Texts',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PASSWORD_CHANGE_OLD_PASSWORD',
      type: 'object',
      title: 'Password Change Old Password Texts',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PROFILE_SUBTITLE',
      type: 'string',
      title: 'Profile Subtitle',
    }),
    defineField({
      name: 'PROFILE_SUBTITLE2',
      type: 'string',
      title: 'Profile Subtitle 2',
    }),
    defineField({
      name: 'PROFILE_USER_HELLO',
      type: 'string',
      title: 'Profile User Hello',
    }),
    defineField({
      name: 'PROFILE_NAME_FIELD',
      type: 'object',
      title: 'Profile Name Field',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PROFILE_EMAIL_FIELD',
      type: 'object',
      title: 'Profile Email Field',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PROFILE_PHONE_FIELD',
      type: 'object',
      title: 'Profile Phone Field',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PROFILE_GENDER_FIELD',
      type: 'object',
      title: 'Profile Gender Field',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PROFILE_BIRTH_FIELD',
      type: 'object',
      title: 'Profile Birth Field',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PROFILE_ADDRESS_FIELD',
      type: 'object',
      title: 'Profile Address Field',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PROFILE_STATE_FIELD',
      type: 'object',
      title: 'Profile State Field',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PROFILE_CITY_FIELD',
      type: 'object',
      title: 'Profile City Field',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PROFILE_BUTTONS',
      type: 'object',
      title: 'Profile Buttons',
      fields: [
        defineField({
          name: 'submit',
          title: 'Submit Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'cancel',
          title: 'Cancel Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'PROFILE_PAYPAL_FIELD',
      type: 'object',
      title: 'Profile paypal Field',
      fields: [
        defineField({
          name: 'label',
          title: 'Label Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'placeholder',
          title: 'Placeholder Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
