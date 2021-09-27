import { errors } from "@docs/errors.doc";

module.exports = {
  paths: {
    "/administrativo/colaboradores": {
      get: {
        tags: ["Exemplo"],
        summary: "Obter registros",
        description: "Obter registros",
        responses: {
          "200": {
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
