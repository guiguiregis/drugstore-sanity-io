import {defineField} from 'sanity'

export default {
  _id: 'pageLayout',
  name: 'pageLayout',
  title: 'Page Layout',
  type: 'document',
  fields: [
    defineField({
      name: 'app_name',
      type: 'string',
      title: 'App Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'menu_items',
      type: 'array',
      title: 'Menu Items',
      of: [
        {
          type: 'object',
          name: 'menu_item',
          fields: [
            {type: 'string', name: 'name'},
            {type: 'string', name: 'link'},
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topbar_show',
      type: 'boolean',
      title: 'Show Toolbar',
    }),
    defineField({
      name: 'topbar_update_title',
      type: 'string',
      title: 'Topbar Update Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topbar_update_content',
      type: 'string',
      title: 'Topbar Update Content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'toolbar_login_text',
      type: 'string',
      title: 'Toolbar Login Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'toolbar_signup_text',
      type: 'string',
      title: 'Toolbar Signup Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'forgot_password_title',
      type: 'string',
      title: 'Forgot Password Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'forgot_password_subtitle',
      type: 'string',
      title: 'Forgot Password Subtitle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'forgot_password_email_label',
      type: 'string',
      title: 'Forgot Password Email Label',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'forgot_password_button',
      type: 'string',
      title: 'Forgot Password Button',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'signup_modal_title',
      type: 'string',
      title: 'Signup Modal Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'signup_modal_subtitle',
      type: 'string',
      title: 'Signup Modal Subtitle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'signup_modal_link',
      type: 'object',
      title: 'Signup Modal Link',
      fields: [
        {type: 'string', name: 'text'},
        {type: 'string', name: 'link'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'login_modal_title',
      type: 'string',
      title: 'Login Modal Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'login_modal_subtitle',
      type: 'string',
      title: 'Login Modal Subtitle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'login_modal_link',
      type: 'object',
      title: 'Login Modal Link',
      fields: [
        {type: 'string', name: 'text'},
        {type: 'string', name: 'link'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form_label_first_name',
      type: 'string',
      title: 'Form Label First Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form_label_last_name',
      type: 'string',
      title: 'Form Label Last Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form_label_email',
      type: 'string',
      title: 'Form Label Email',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form_label_password',
      type: 'string',
      title: 'Form Label Password',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form_label_confirm_password',
      type: 'string',
      title: 'Form Label Confirm Password',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form_label_forgot_link',
      type: 'object',
      title: 'Form Label Forgot Password Link',
      fields: [
        {type: 'string', name: 'text'},
        {type: 'string', name: 'link'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form_separator_text',
      type: 'string',
      title: 'Form Separator Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form_google_social',
      type: 'object',
      title: 'Form Google Social',
      fields: [
        {type: 'string', name: 'name'},
        {type: 'string', name: 'url'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form_fb_social',
      type: 'object',
      title: 'Form Facebook Social',
      fields: [
        {type: 'string', name: 'name'},
        {type: 'string', name: 'url'},
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'form_get_started_title',
      type: 'string',
      title: 'Form Get Started Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footer_links',
      type: 'array',
      title: 'Footer Links',
      of: [
        {
          type: 'object',
          name: 'footer_links_section',
          fields: [
            {type: 'string', name: 'title'},
            {
              type: 'array',
              name: 'links',
              title: 'Links',
              of: [
                {
                  type: 'object',
                  name: 'footer_link',
                  fields: [
                    {type: 'string', name: 'title'},
                    {type: 'string', name: 'link'},
                  ],
                },
              ],
            },
            {type: 'boolean', name: 'withNewsLetter', title: 'Include Newsletter Signup?'},
            {type: 'string', name: 'newsTitle', title: 'Newsletter Title'},
            {type: 'string', name: 'newsInput', title: 'Newsletter Input Label'},
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'verification_title',
      type: 'string',
      title: 'Verification Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'verification_subtitle',
      type: 'string',
      title: 'Verification Subtitle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'verification_code_label',
      type: 'string',
      title: 'Verification Code Label',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'verification_button',
      type: 'string',
      title: 'Verification Button',
      validation: (Rule) => Rule.required(),
    }),
  ],
}
