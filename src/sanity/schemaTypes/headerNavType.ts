import { MenuIcon, LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const headerNavType = defineType({
  name: 'headerNav',
  title: 'Header Nav',
  icon: MenuIcon,
  type: 'document',
  fields: [
    defineField({
      title: 'Nav Items',
      description: 'Select pages for the top nav bar',
      name: 'links',
      type: 'array',
      of: [
        {
          name: 'internalLink',
          title: 'Internal Link',
          type: 'reference',
          to: [{ type: 'page' }]
        },
        {
          name: 'externalLink',
          title: 'External Link',
          icon: LinkIcon,
          type: 'object',
          fields: [
            defineField({
              name: 'href',
              title: 'URL',
              description: 'Enter the full url',
              type: 'url'
            }),
            defineField({
              name: 'text',
              title: 'Display Text',
              type: 'string'
            })
          ]
        }
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Main Header Nav Items'
      };
    }
  }
});
