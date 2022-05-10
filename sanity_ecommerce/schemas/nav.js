export default {
    name: "nav",
    type: "document",
    title: "nav",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title"
      },
      {
        name: "id",
        type: "string",
        title: "Id"
      },
      {
        name: "linkUrl",
        type: "string",
        title: "URL Link"
      },
      {
        name: "navItem",
        type: "array",
        title: "Navigation items",
        of: [{ type: "navItem" }]
      },
      {
        name: "navTile",
        type: "image",
        title: "Navigation Tile?"
      },
    ]
  };