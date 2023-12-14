import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'document',
  fields: [
    defineField({
      name: 'facebook_id',
      title: 'Facebook ID',
      type: 'string',
    }),
    defineField({
      name: 'instagram_id',
      title: 'Instagram ID',
      type: 'string',
    }),
    defineField({
      name: 'twitter_id',
      title: 'Twitter ID',
      type: 'string',
    }),
    defineField({
      name: 'linkedin_id',
      title: 'Linkedin ID',
      type: 'string',
    }),
  ],
})
