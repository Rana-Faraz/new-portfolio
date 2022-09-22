export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "ProjectName",
      type: "string",
    },
    {
      name: "framework",
      title: "Framework",
      type: "string",
    },
    {
      name: "projectImage",
      title: "ProjectImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "dateEnded",
      type: "date",
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
  ],
};
