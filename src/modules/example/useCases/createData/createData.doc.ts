import { errors } from "@docs/errors.doc";

module.exports = {
  paths: {
    "/administrativo/colaboradores": {
      post: {
        tags: ["Exemplo"],
        summary: "Criar um novo registro",
        description: "Criar um novo registro",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    required: true,
                    example: "Titulo do registro",
                  },
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Departamento cadastrado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/example",
                },
              },
            },
          },
          ...errors,
        },
      },
    },
  },
};
