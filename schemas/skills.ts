import {defineField, defineType} from 'sanity'

export const skillObject = defineType({
  name: 'skillObject',
  title: 'Skill',
  type: 'object',
  fields: [
    defineField({
      title: 'Skill Name',
      name: 'skill_name',
      type: 'string',
    }),

    defineField({
      name: 'skill_percentage',
      title: 'Skill Percentage',
      type: 'number',
    }),
  ],
})

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      title: 'Skill',
      name: 'skill',
      type: 'array',
      of: [{type: 'skillObject'}],
    }),
  ],
})
