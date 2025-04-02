import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const textWithImageType = defineType({
  name: 'textWithImage',
  type: 'object',
  title: 'Text with Image',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'imagePosition',
      type: 'string',
      initialValue: 'right',
      options: {
        list: [
          {title: 'right', value: 'right'},
          {title: 'left', value: 'left'}
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Text with Image',
        media: image || DocumentTextIcon,
      }
    },
  }
})