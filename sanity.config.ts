import {AssetSource, defineConfig, isDev} from 'sanity'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {structure} from './desk'

import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {customDocumentActions} from './plugins/customDocumentActions'
import {defaultDocumentNode} from './desk/defaultDocumentNode'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'practitioner-depot',

  projectId: 'h3c836et',
  dataset: 'production',

  plugins: [
    deskTool({structure, defaultDocumentNode}),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    vercelDeployTool(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources: AssetSource[]) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },
})
