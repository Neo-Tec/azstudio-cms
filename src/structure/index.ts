export const structure = (S: any, context: any) =>
  S.list()
    .title('Site Content')
    .items([
      S.listItem()
        .title('About Me')
        .child(S.editor().id('aboutMe').schemaType('aboutMe').documentId('aboutMe')),
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          ![
            'aboutMe',
            // 'post',
            // 'category',
            // 'author',
          ].includes(listItem.getId()),
      ),
    ])
