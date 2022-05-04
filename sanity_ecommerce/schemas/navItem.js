export default {
    name: "navItem",
    type: "object",
    title: "NavItem",
    fields: [
      {
        name: "text",
        type: "string",
        title: "Sub-category title",
      },
      {
        name: "subCategoryItem",
        type: "subCategoryItem",
        title: "Sub-category Links",
      },
    ]
  };