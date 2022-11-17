export default {
  name: "timeline",
  title: "Timeline",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "location",
      title: "Location",
      type: "text",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "imagePoint",
      title: "ImagePoint",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
