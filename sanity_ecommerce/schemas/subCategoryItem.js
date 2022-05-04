export default {
    name: "subCategoryItem",
    type: "object",
    title: "subCategoryItem",
    fields: [
      {
        name: "subCategoryItem",
        type: "array",
        of: [{type: 'subCategoryItemLink'}],
        title: "-",
      },
    ]
  };