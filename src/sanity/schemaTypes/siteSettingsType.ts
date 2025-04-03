import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text'
    })
  ],
})
