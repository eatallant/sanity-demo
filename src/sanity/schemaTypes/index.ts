import { type SchemaTypeDefinition } from 'sanity'

import { heroType } from './heroType'
import { pageType } from './pageType'
import { pageBuilderType } from './pageBuilderType'
import { textWithImageType } from './textWithImageType'
import { siteSettingsType } from './siteSettingsType'
import { headerNavType } from './headerNavType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageBuilderType, pageType, heroType, textWithImageType, siteSettingsType, headerNavType],
}
