module.exports = {
  components: {
    schemas: {
      example: {
        type: "object",
        properties: {
          id: {
            type: "string",
            required: true,
          },
          title: {
            type: "string",
            required: true,
          },
        },
      },
    },
  },
};
