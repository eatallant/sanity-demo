import { type SchemaTypeDefinition } from 'sanity'

import { heroType } from './heroType'
import { pageType } from './pageType'
import { pageBuilderType } from './pageBuilderType'
import { textWithImageType } from './textWithImageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageBuilderType, pageType, heroType, textWithImageType],
}
