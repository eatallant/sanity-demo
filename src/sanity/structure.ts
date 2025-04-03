import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Demo')
    .items([
      S.documentTypeListItem("page").title("Pages"),
      S.listItem()
        .title("Header")
        .schemaType('headerNav')
        .child(
          S.document()
            .schemaType('headerNav')
            .documentId('headerNav')),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .schemaType('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['page', 'siteSettings', 'headerNav'].includes(item.getId()!),
      ),
    ])
