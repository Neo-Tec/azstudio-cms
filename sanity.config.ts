import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes, singeletonSchemas} from './schemas'
import {createSingeletonStructure} from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'azcreation-cms',

  projectId: 'uhk70a7q',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: createSingeletonStructure(singeletonSchemas),
    }),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
