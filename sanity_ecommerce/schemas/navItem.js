export default {
    name: "navItem",
    type: "document",
    title: "NavItem",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Sub-category title",
      },
      {
        name: "id",
        type: "string",
        title: "Id"
      },
      {
        name: "itemAndLink",
        type: "itemAndLink",
        _ref: "itemAndLink",
        title: "Sub-category Links",
      },
    ]
  };