export default {
    name: "itemAndLink",
    type: "object",
    title: "Sub Category and Link",
    fields: [
      {
        name: "link",
        type: "array",
        of: [{type: 'subCategoryItemLink'}],
        title: "-",
      },
    ]
  };