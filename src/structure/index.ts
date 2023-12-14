// const singeletonSchemas = [{title: 'About Me', id: 'aboutMe'}]

// function sigeletonStructure(S: any, schemas: any) {
//   return singeletonSchemas.map((schema) =>
//     S.listItem()
//       .title(schema.title)
//       .child(S.editor().id(schema.id).schemaType(schema.id).documentId(schema.id)),
//   )
// }

export function createSingeletonStructure(schemas: any) {
  return (S: any, context: any) =>
    S.list()
      .title('Site Content')
      .items([
        ...schemas.map((schema: any) =>
          S.listItem()
            .title(schema.title)
            .child(S.editor().id(schema.name).schemaType(schema.name).documentId(schema.name)),
        ),
        ...S.documentTypeListItems().filter(
          (listItem: any) => !schemas.map((schema: any) => schema.name).includes(listItem.getId()),
        ),
      ])
}

// export const structure = (S: any, context: any) =>
//   S.list()
//     .title('Site Content')
//     .items([
//       ...sigeletonStructure(S, singeletonSchemas),
//       ...S.documentTypeListItems().filter(
//         (listItem: any) => !singeletonSchemas.map((schema) => schema.id).includes(listItem.getId()),
//       ),
//     ])
