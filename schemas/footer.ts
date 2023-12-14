import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      title: 'About',
      name: 'about',
      type: 'text',
    }),
    defineField({
      title: 'Phone',
      name: 'phone',
      type: 'string',
    }),
    defineField({
      title: 'Email',
      name: 'email',
      type: 'string',
    }),
    defineField({
      title: 'Location',
      name: 'location',
      type: 'string',
    }),
  ],
})
