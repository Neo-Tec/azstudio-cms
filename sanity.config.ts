import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'azcreation-cms',

  projectId: 'uhk70a7q',
  dataset: 'production',

  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
